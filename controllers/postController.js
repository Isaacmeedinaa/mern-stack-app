const { Post } = require("../models/Post");

const postController = {
  getPosts: async (req, res) => {
    res.send({ message: "posts!" });
  },
};

module.exports = postController;
