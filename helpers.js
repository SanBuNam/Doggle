/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require("fs");

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require("moment");

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// Making a static map is really long - this is a handy helper function to make one
exports.staticMap = ([lng, lat]) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);
exports.iconPng = (name) =>
  fs.readFileSync(`./public/images/icons/${name}.png`);

exports.siteName = `Coding Korea`;

exports.menu = [
  { slug: "/posts", title: "나눔의 장", icon: "post" },
  { slug: "/preparation", title: "preparation", icon: "tag" },
  { slug: "/javascript", title: "javascript", icon: "post" },
  { slug: "/tags", title: "tags", icon: "tag" },
  { slug: "/top", title: "top", icon: "top" },
  { slug: "/add", title: "add", icon: "add" },
];

exports.preparationMenu = [
  { slug: "/preparation", title: "Main", icon: "🚣‍♂️" },
  { slug: "/preparation/preparationOne", title: "로드 투 코드", icon: "🚣‍♂️" },
  {
    slug: "/preparation/preparationTwo",
    title: "프로그래밍 관련 소통",
    icon: "post",
  },
  { slug: "/preparation/preparationThree", title: "three", icon: "🚣‍♂️" },
  {
    slug: "/preparation/preparationFour",
    title: "Four",
    icon: "post",
  },
];

exports.javaScriptMenu = [
  { slug: "/javascript", title: "자바스크립트란?", icon: "" },
  {
    slug: "/javascript/types",
    title: "Data types (데이타 타입)",
    icon: "",
  },
  {
    slug: "/javascript/declaration",
    title: "variables (변수) & declaration (선언)",
    icon: "",
  },
  { slug: "/javascript/operators", title: "Operators (연산자)", icon: "🚣‍♂️" },
  { slug: "/javascript/javascriptFour", title: "courseFour", icon: "🚣‍♂️" },
];
