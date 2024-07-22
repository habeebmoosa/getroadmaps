import dbConnect from "@/lib/dbConnect";
import Roadmaps from "@/models/Roadmaps";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: Request) {
    await dbConnect();
    const { userId } = auth();

    const url = new URL(req.url);
    const roadmapId = url.searchParams.get('roadmapId');

    try {
        if(!userId){
            return new Response("Unauthorized", {status: 401});
        }

        const roadmap = await Roadmaps.findOne({_id:roadmapId, userId});
        const jsonObject = JSON.parse(roadmap.roadmap);

        if(jsonObject){
            return new Response(JSON.stringify(jsonObject), {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        return new Response(JSON.stringify({msg:"Roadmaps have'nt created yet"}), {status: 200});

    } catch (error) {
        return new Response(JSON.stringify({ error: "Error occure" }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}