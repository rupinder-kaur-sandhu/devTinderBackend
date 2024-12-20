const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rupinder61093sandhu:rupinder61093sandhu@cluster0.lt5qztr.mongodb.net/devTiner?retryWrites=true&w=majority"
  );
};

module.exports = connectDB;
