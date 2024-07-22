import dbConnect from "@/lib/dbConnect";
import { auth } from "@clerk/nextjs/server";
import Roadmaps from "@/models/Roadmaps";

export async function POST(req: Request){
    await dbConnect();
    const {userId} = auth();
    
    try {
        if(!userId){
            return new Response("Unauthorized", {status: 401});
        }

        const roadmapsCount = await Roadmaps.countDocuments({ userId });
        console.log(roadmapsCount)

        let newRoadmap;
        if (roadmapsCount < 3) {
            console.log("hey")
            const roadmap = new Roadmaps({
                userId,
                roadmap: `{ "nodes": [ { "id": "1", "type": "start", "data": { "label": "Enter the prompt" }, "position": { "x": 370, "y": 300 }}, { "id": "2", "data": { "label": "Hit the Generate button" }, "position": { "x": 520, "y": 400 } } ], "edges": [ { "id": "e1-2", "source": "1", "target": "2", "animated": false } ] }`
            });
            newRoadmap = await roadmap.save();
            console.log(roadmap);
        }else{
            return new Response(JSON.stringify({msg:"Spcess are full"}), {status: 401});
        }
        
        return new Response(JSON.stringify({newRoadmap}), {status:200});
    } catch (error) {
        return new Response(JSON.stringify({ error: "Error occure" }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}


export async function GET(req: Request) {
    await dbConnect();
    const { userId } = auth();

    try {
        if(!userId){
            return new Response("Unauthorized", {status: 401});
        }

        const roadmaps = await Roadmaps.find({userId});

        if(roadmaps.length === 0){
            return new Response(JSON.stringify([]), {status: 200});
        }

        return new Response (JSON.stringify(roadmaps), {status: 200});

    } catch (error) {
        return new Response(JSON.stringify({ error: "Error occure" }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}


export async function DELETE(req: Request) {
    await dbConnect();
    const { userId } = auth();

    const url = new URL(req.url);
    const roadmapId = url.searchParams.get('roadmapId');

    try {
        if(!userId){
            return new Response("Unauthorized", {status: 401});
        }

        await Roadmaps.findByIdAndDelete({_id: roadmapId});

    } catch (error) {
        return new Response(JSON.stringify({ error: "Error occure" }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}