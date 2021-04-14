const fs = require("fs");
exports.moment = require("moment");

exports.dump = (obj) => JSON.stringify(obj, null, 2);

exports.staticMap = ([lng, lat]) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);
exports.iconPng = (name) =>
  fs.readFileSync(`./public/images/photos/${name}.png`);

exports.siteName = `K-Food Class`;

exports.menu = [
  { slug: "/javascript", title: "Cooking", img: "1" },
  { slug: "/posts", title: "Community", img: "2" },
  { slug: "/tags", title: "Shop", img: "3" },
  { slug: "/add-post", title: "About", img: "4" },
];

exports.categories = [
  { title: "Rice", img: "1" },
  { title: "Kimchi", img: "2" },
  { title: "Soup", img: "3" },
  { title: "Beef", img: "4" },
  { title: "Pork", img: "1" },
  { title: "Chicken", img: "2" },
  { title: "Seafood", img: "4" },
  { title: "Salads", img: "4" }
];

exports.dishes = [
  { title: "Rice", img: "1" },
  { title: "Kimchi", img: "2" },
  { title: "Soup", img: "3" },
  { title: "Beef", img: "4" }
];