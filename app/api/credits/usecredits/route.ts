import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: Request){
    await dbConnect();
    const {userId} = auth();
    
    try {
        if(!userId){
            return new Response("Unauthorized", {status: 401});
        }

        const user = await User.findOne({userId});

        if(user?.credits === 0){
            return new Response(JSON.stringify({error: "You have no credits left. Please contact to the developer."}), {status: 400});
        }

        const newCredits = await User.findOneAndUpdate({userId}, { $inc: { credits: -1 } }, {new: true});
        return new Response(JSON.stringify({newCredits}), {status: 200});
    } catch (error: any) {
        return new Response(JSON.stringify({error: error.message}), {status: 500});
    }
}