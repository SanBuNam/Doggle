const mongoose = require("mongoose");
const Course = mongoose.model("Course");
const User = mongoose.model("User");

exports.homePage = (req, res) => {
  res.render("home", { title: "독학 프로그래머" });
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

exports.javaScript = (req, res) => {
  res.render("javaScript", { title: "JavaScript" });
};

exports.javaScriptOne = (req, res) => {
  res.render("javaScriptOne", { title: "javaScriptOne" });
};

exports.javaScriptTwo = (req, res) => {
  res.render("javaScriptTwo", { title: "javaScriptTwo" });
};

exports.javaScriptThree = (req, res) => {
  res.render("javaScriptThree", { title: "javaScriptThree" });
};

exports.javaScriptFour = (req, res) => {
  res.render("javaScriptFour", { title: "javaScriptFour" });
};
