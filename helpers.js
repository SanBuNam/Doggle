const fs = require("fs");
exports.moment = require("moment");

exports.dump = (obj) => JSON.stringify(obj, null, 2);

exports.staticMap = ([lng, lat]) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);
exports.iconPng = (name) =>
  fs.readFileSync(`./public/images/icons/${name}.png`);

exports.siteName = `All Code. All Day.`;

exports.menu = [
  { slug: "/javascript", title: "Courses", icon: "" },
  // { slug: "/posts", title: "All Posts", icon: "" },
  { slug: "/tags", title: "tags", icon: "" },
  { slug: "/add", title: "Add Post", icon: "" },
];

exports.javaScriptMenu = [
  { slug: "/javascript", title: "What is JS?", icon: "" },
  {
    slug: "/javascript/types",
    title: "Data types in JS",
    icon: "",
  },
  {
    slug: "/javascript/declaration",
    title: "variables & declaration",
    icon: "",
  },
  { slug: "/javascript/operators", title: "Operators", icon: "" },
  { slug: "/javascript/control-flow", title: "Control Flow", icon: "" },
];

exports.quotes = [
  {name: "0", quote: "Life is to enjoy no matter what happens.Life is to enjoy no matter what happens.Life is to enjoy no matter what happens."},
  {name: "1", quote: "Jesus loves me like no other person.Jesus loves me like no other person.Jesus loves me like no other person."},
  {name: "2", quote: "Life is to enjoy no matter what happens."},
  {name: "3", quote: "Jesus loves me like no other person."},
  {name: "4", quote: "Life is to enjoy no matter what happens."},
  {name: "5", quote: "Jesus loves me like no other person."},
  {name: "6", quote: "Life is to enjoy no matter what happens."},
  {name: "7", quote: "Jesus loves me like no other person."},
  {name: "8", quote: "Life is to enjoy no matter what happens."},
  {name: "9", quote: "Jesus loves me like no other person."},
  {name: "10", quote: "Life is to enjoy no matter what happens."},
  {name: "11", quote: "Jesus loves me like no other person."},
];