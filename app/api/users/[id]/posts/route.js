import Commitment from "@models/commitment";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const commitment = await Commitment.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(commitment), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
