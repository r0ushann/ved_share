import Prompt from '@models/prompt';
import User from "@models/user";

import { connectToDB } from '@utils/database';

export const GET = async (request, {params})=> {
    try {
        await connectToDB();

        const prompts = await Prompot.find({creator: params.id}).populate("creator")

        return new Response(JSON.stringify(prompts), {status: 200});
           
        } catch (error) {
            return new Response("Failed to fetch prompts created by user", {status: 500});
           
        }
}