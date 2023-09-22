import { connectToDB } from "@utils/database";
import Commitment from "@models/commitment";

// GET (Read)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    // const commitments = await Commitment.find({}).populate("creator");
    const commitment = await Commitment.findById(params.id).populate({
      path: "creator",
    });
    if (!commitment)
      return new Response("Commitment not Found", {
        status: 404,
      });
    console.log(commitment);
    return new Response(JSON.stringify(commitment), {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to fetch all datas", {
      status: 500,
    });
  }
};

// PATCH (Update)
export const PATCH = async (request, { params }) => {
  const { commitment, tag } = await request.json();

  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingCommitment = await Commitment.findById(params.id);

    if (!existingCommitment) {
      return new Response("Commitment not found", { status: 404 });
    }

    // Update the Commitment with new data
    existingCommitment.commitment = commitment;
    existingCommitment.tag = tag;

    await existingCommitment.save();

    return new Response("Successfully updated the Commitments", {
      status: 200,
    });
  } catch (error) {
    return new Response("Error Updating Commitment", { status: 500 });
  }
};

// DELETE (Delete)
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    await Commitment.findByIdAndRemove(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting commitment", { status: 500 });
  }
};