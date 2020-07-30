const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  // res.send("Hey! It works!");
  // res.render("hello", {
  //   name: "david",
  //   dog: req.query.dog,
  // });
  // var david = { name: "david", age: 39, sex: "male" };
  // res.json(david);
  // res.render("hello");
  // res.send(`${req.query.name} ${req.query.age}`);
  res.json(req.query);
});

router.get("/reverse/:name/:age", (req, res) => {
  const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;
