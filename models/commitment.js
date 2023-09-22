import { Schema, model, models } from "mongoose";

const CommitmentSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User", // means one user can make as many commitments as they want
  },
  commitment: {
    type: String,
    required: [true, "Commitment is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Commitment = models.Commitment || model("Commitment", CommitmentSchema);
export default Commitment;
