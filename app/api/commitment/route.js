import { connectToDB } from "@utils/database";
import Commitment from "@models/commitment";

export const GET = async (request) => {
  try {
    await connectToDB();
    // const commitments = await Commitment.find({}).populate("creator");
    const commitments = await Commitment.find({}).populate({
      path: "creator",
    });
    console.log(commitments);
    return new Response(JSON.stringify(commitments), {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to fetch all datas", {
      status: 500,
    });
  }
};
