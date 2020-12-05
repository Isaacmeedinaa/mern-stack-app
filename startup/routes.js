const express = require("express");

const posts = require("../routes/posts");

const routes = (app) => {
  app.use(express.json());

  app.use("/api/v1/posts", posts);
};

module.exports = routes;
