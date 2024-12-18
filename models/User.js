import { Schema, model } from "mongoose";
import { hash, compare } from "bcryptjs";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Password Hashing
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hash(this.password, 10);
  next();
});

// Compare Password
UserSchema.methods.comparePassword = async function (password) {
  return compare(password, this.password);
};

export default model("User", UserSchema);
