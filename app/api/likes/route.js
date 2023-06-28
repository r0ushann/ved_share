import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { promptId , prompt, tag } = await request.json();

    try {
        // Get the post ID from the request body
        const { postId } = req.body;
  
        // Find the post by its unique identifier (e.g., postId)
        const post = await post.findById(promptId);
  
        // Increment the like count and save the updated post
        post.likes += 1;
        await post.save();
  
        // Return the updated like count as a response
        res.status(200).json({ likes: post.likes });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update like count' });
      }
}

