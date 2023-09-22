import { connectToDB } from "@utils/database";
import Commitment from "@models/commitment";

export const POST = async (req) => {
  const { creator, commitment, tag } = await req.json();

  try {
    await connectToDB();
    const newCommitment = new Commitment({
      creator,
      commitment,
      tag,
    });
    await newCommitment.save();

    return new Response(JSON.stringify(newCommitment), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create your Commitment", {
      status: 500,
    });
  }
};
