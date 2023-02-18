import PostModel, { PostInterface } from "../models/post.model";

export default async function validate(title?: string, body?: string) {
  if (!title || !body) throw new Error("Both title & body are required.");

  return await new PostModel({ title: title, body: body }).save();
}
