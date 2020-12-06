const testMiddleware = (req, res, next) => {
  console.log("middleware works!");
  next();
};

module.exports = testMiddleware;
