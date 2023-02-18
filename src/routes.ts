import mongoose from "mongoose";
import express, { Express } from "express";
import PostModel from "./models/post.model";
import SerializePost from "./middleware/validatePost";

function routes(app: Express) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/post/:id", async (req, res) => {
    const id = req.params.id.toString();
    const post = await PostModel.findById(new mongoose.Types.ObjectId(id));
    res.status(200).json({ post });
  });

  app.get("/posts", async (req, res) => {
    const posts = await PostModel.find({});
    res.status(200).json({ posts });
  });

  app.post("/create", (req, res) => {
    try {
      const title = req.body.title;
      const body = req.body.body;
      const post = SerializePost(title, body);
      post.then((post) => {
        return res.json({ status: "Post created with id: " + post._id });
      });
    } catch (err) {
      throw err;
    }
  });

  app.patch("/update/:id", async (req, res) => {
    try {
      const params = req.body;
      const id = req.params.id.toString();
      const post = await PostModel.findOneAndUpdate(
        new mongoose.Types.ObjectId(id),
        params
      );
      return res.status(200).json("updated the content of post.");
    } catch (err: any) {
      throw new Error(err);
    }
  });

  app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id.toString();
    await PostModel.findOneAndDelete(new mongoose.Types.ObjectId(id));
    return res.status(200).json("Deleted the post.");
  });
}

export default routes;
