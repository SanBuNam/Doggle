const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.homePage = (req, res) => {
  res.render("home", { title: "독학 프로그래머" });
};

exports.preparationPage = (req, res) => {
  res.render("preparation", { title: "코딩 커뮤니티" });
};
exports.preparationOne = (req, res) => {
  res.render("preparationOne", { title: "preparationOne" });
};
exports.preparationTwo = (req, res) => {
  res.render("preparationTwo", { title: "preparationTwo" });
};
exports.preparationThree = (req, res) => {
  res.render("preparationThree", { title: "preparationThree" });
};
exports.preparationFour = (req, res) => {
  res.render("preparationFour", { title: "preparationFour" });
};

exports.javaScript = (req, res) => {
  res.render("javaScript", { title: "JavaScript 설명" });
};
exports.javaScriptTypes = (req, res) => {
  res.render("javaScriptTypes", { title: "JavaScript 데이타 타입" });
};
exports.javaScriptDeclaration = (req, res) => {
  res.render("javaScriptDeclaration", { title: "var let const declaration" });
};
exports.javaScriptOperators = (req, res) => {
  res.render("javaScriptOperators", { title: "javaScript Operators" });
};
exports.javaScriptFour = (req, res) => {
  res.render("javaScriptFour", { title: "javaScriptFour" });
};
