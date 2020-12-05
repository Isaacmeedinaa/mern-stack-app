const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://mern-stack-app147.herokuapp.com",
      changeOrigin: true,
    })
  );
};
