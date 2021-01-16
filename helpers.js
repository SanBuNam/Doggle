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
  { slug: "/javascript", title: "코딩 코스", icon: "" },
  // { slug: "/posts", title: "All Posts", icon: "" },
  { slug: "/tags", title: "포스트 보기", icon: "" },
  { slug: "/add-post", title: "포스트 추가", icon: "" },
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
  {verse: "시편 37:5~6", words: "네 길을 여호와께 맡기라 그를 의지하면 그가 이루시고 네 의를 빛같이 나타내시며 네 공의를 정오의 빛같이 하시리다."},
  {verse: "이사야 41:10", words: "두려워 말라 내가 너와 함께 함이니라 놀라지 말라 나는 네 하나님이 됨이니라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라."},
  {verse: "베드로전서 37:5~6", words: "너희 염려를 다 주께 맡기라 이는 그가 너희를 돌보심이라."},
  {verse: "야고보서 1:6", words: "오직 믿음으로 구하고 조금도 의심하지 말라"},
  {verse: "시편 18:1", words: "나의 힘이신 여호와여 내가 주를 사랑하나이다."},
  {verse: "시편 46:1", words: "하나님은 우리의 피난처시요 힘이시니 환난 중에 만날 큰 도움이시라."}
];