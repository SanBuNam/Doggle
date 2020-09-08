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
  { slug: "/courses", title: "강의실", icon: "store" },
  { slug: "/stores", title: "자율학습", icon: "store" },
  { slug: "/tags", title: "투표실", icon: "tag" },
  { slug: "/top", title: "인기순", icon: "top" },
  { slug: "/add", title: "나눔실", icon: "add" },
];

exports.sideMenu = [
  { slug: "/communities", title: "Main", icon: "🚣‍♂️" },
  { slug: "/community/communityOne", title: "로드 투 코드", icon: "🚣‍♂️" },
  {
    slug: "/community/communityTwo",
    title: "프로그래밍 관련 소통",
    icon: "store",
  },
  {
    slug: "/community/communityThree",
    title: "자바스크립트의 모든것",
    icon: "tag",
  },
  { slug: "/community/communityFour", title: "four", icon: "top" },
];
