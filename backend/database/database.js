const mongoose = require("mongoose");
const connectDatabse = () => {
  mongoose
    .connect(
      "mongodb+srv://pawansingh55678:Hcverm12@learning.gllfydt.mongodb.net/",
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
