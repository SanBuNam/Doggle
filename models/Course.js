const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const courseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a course name!",
  },
  slug: String,
});
