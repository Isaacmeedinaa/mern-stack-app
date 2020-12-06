const express = require("express");
const testMiddleware = require("../middleware/testMiddleware");
const postController = require("../controllers/postController");

const router = express.Router();

router.get("/", testMiddleware, postController.getPosts);

module.exports = router;
