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
  { slug: "/add", title: "포스트 추가", icon: "" },
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
  {name: "0", quote: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라 - 빌립보서 4:13"},
  {name: "1", quote: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라 - 빌립보서 4:13"},
  {name: "2", quote: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라 - 빌립보서 4:13"},
  {name: "3", quote: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라 - 빌립보서 4:13"},
  {name: "4", quote: "무릇 지킬만한 것보다 더욱 네 마음을 지키라. 생명의 근원이 이에서 남이니라"},
  {name: "5", quote: "무릇 지킬만한 것보다 더욱 네 마음을 지키라. 생명의 근원이 이에서 남이니라"},
  {name: "6", quote: "무릇 지킬만한 것보다 더욱 네 마음을 지키라. 생명의 근원이 이에서 남이니라"},
  {name: "7", quote: "무릇 지킬만한 것보다 더욱 네 마음을 지키라. 생명의 근원이 이에서 남이니라"},
  {name: "8", quote: "무릇 지킬만한 것보다 더욱 네 마음을 지키라. 생명의 근원이 이에서 남이니라"},
  {name: "9", quote: "무릇 지킬만한 것보다 더욱 네 마음을 지키라. 생명의 근원이 이에서 남이니라"},
  {name: "10", quote: "무릇 지킬만한 것보다 더욱 네 마음을 지키라. 생명의 근원이 이에서 남이니라"},
  {name: "11", quote: "무릇 지킬만한 것보다 더욱 네 마음을 지키라. 생명의 근원이 이에서 남이니라"},
];