const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect("mongodb://localhost/mern-stack-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log("Connected to MongoDB 🙌!"))
    .catch((err) => console.log(err));
};

module.exports = db;
