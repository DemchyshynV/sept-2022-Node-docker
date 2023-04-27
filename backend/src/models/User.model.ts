import { model, Schema } from "mongoose";

import { EGenders } from "../types";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    gender: {
      type: String,
      enum: EGenders,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = model("user", userSchema);
