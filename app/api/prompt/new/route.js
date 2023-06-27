import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
    const {userId, prompt, tag} = await req.json();

    try{
        await connectToDB();
        // refer to models/prompt for model structure
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save();//saving to db

        return new Response(JSON.stringify(newPrompt),{
            status: 201
        })

    }catch(e){
        return new Response("Failed to create a new Post",{
            status: 500
        })
    }
   
}