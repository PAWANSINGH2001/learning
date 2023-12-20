const mongoose = require("mongoose");
const connectDatabse = () => {
  mongoose
    .connect(
      "mongodb+srv://pawan:Hcverm12@social-media.zdh8jfd.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((con) => {
      console.log("Connected to MongoDB server");
    });
};
module.exports = connectDatabse;
