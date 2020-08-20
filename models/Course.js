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
  description: {
    type: String,
    trim: true,
  },
  streamCourse: String,
  downloadCourse1: String,
  downloadCourse2: String,
  starterFile: String,
  certificate: String,
  invoice: String,
});

courseSchema.index({
  name: "text",
  description: "text",
});

module.exports = mongoose.model("Course", courseSchema);
