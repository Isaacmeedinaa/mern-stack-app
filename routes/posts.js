const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.route("/").get(postController.getPosts);

module.exports = router;
