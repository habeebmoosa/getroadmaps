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

        if(!user){
            const newUser = new User({userId});
            const newuser = await newUser.save();

            return new Response(JSON.stringify({user:newuser}), {status: 200});
        }
    
        return new Response(JSON.stringify({user}), {status: 200});
    } catch (error: any) {
        return new Response(JSON.stringify({error: error.message}), {status: 500});
    }
}