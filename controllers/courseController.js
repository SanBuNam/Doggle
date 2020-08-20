const mongoose = require("mongoose");
const Course = mongoose.model("Course");
const User = mongoose.model("User");

exports.getCourses = async (req, res) => {
  const courses = Course.find();

  res.render("courses", { title: "Courses", courses });
};
