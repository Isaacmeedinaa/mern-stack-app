const { Post } = require("../models/Post");

const postController = {
  getPosts: async (req, res) => {
    const posts = await Post.find().select("-__v");
    res.send(posts);
  },
};

module.exports = postController;
