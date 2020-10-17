const fs = require("fs");

exports.moment = require("moment");

exports.dump = (obj) => JSON.stringify(obj, null, 2);

exports.staticMap = ([lng, lat]) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);
exports.iconPng = (name) =>
  fs.readFileSync(`./public/images/icons/${name}.png`);

exports.siteName = `Coding Korea`;

exports.menu = [
  // { slug: "/preparation", title: "코딩 정보", icon: "cup" },
  { slug: "/javascript", title: "자바스크립트", icon: "" }, //js-laptop
  { slug: "/posts", title: "회원 포스팅", icon: "" }, //think-code
  { slug: "/tags", title: "추천 포스팅", icon: "" }, //post-tags
  { slug: "/top", title: "인기 포스팅", icon: "" }, //top-posts
  { slug: "/add", title: "포스팅 추가", icon: "" }, //add-post
];

exports.preparationMenu = [
  { slug: "/preparation", title: "Main", icon: "" },
  { slug: "/preparation/preparationOne", title: "로드 투 코드", icon: "" },
  {
    slug: "/preparation/preparationTwo",
    title: "프로그래밍 관련 소통",
    icon: "post",
  },
  { slug: "/preparation/preparationThree", title: "three", icon: "" },
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
    title: "Data types",
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
