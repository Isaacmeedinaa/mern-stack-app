const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  text: { type: String, min: 10, max: 255, required: true },
});

const Post = mongoose.model("Post", postSchema);

exports.postSchema = postSchema;
exports.Post = Post;
