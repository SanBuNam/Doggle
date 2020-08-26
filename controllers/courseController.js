const mongoose = require("mongoose");
const Course = mongoose.model("Course");
const User = mongoose.model("User");

exports.homePage = (req, res) => {
  res.render("index", { title: "코딩 교실" });
};

exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.render("courses", { title: "Courses", courses });
};

exports.getCourseBySlug = async (req, res, next) => {
  const course = await Course.findOne({ slug: req.params.slug });
  if (!course) return next();
  res.render("course", { course, title: course.name });
};
