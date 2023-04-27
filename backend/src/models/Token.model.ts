import { model, Schema, Types } from "mongoose";

import { User } from "./User.model";

const tokensSchema = new Schema(
  {
    _user_id: {
      type: Types.ObjectId,
      required: true,
      ref: User,
    },
    accessToken: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export const Token = model("Token", tokensSchema);
