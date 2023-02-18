import mongoose from "mongoose";

export interface PostInterface {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new mongoose.Schema(
  {
    title: { type: "string", required: true, unique: true },
    body: { type: "object", required: true },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
