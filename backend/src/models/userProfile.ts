import mongoose, { Schema, Document } from "mongoose";

export interface IUserAccount extends Document {
  userId: mongoose.Types.ObjectId;
}

const userProfileSchema: Schema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String },
});

export default mongoose.model<IUserAccount>("Profile", userProfileSchema);
