import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

// regular express backend - alawys on and running server
// const User = model("User", userSchema);

// but in next js route, everytime is going to be created and runing, for the time when it's getting called
// so we have to make this check "models.User" so that exisiting model not created twice
const User = models.User || model("User", userSchema);
export default User;
