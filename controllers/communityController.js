exports.communityPage = (req, res) => {
  res.render("community", { title: "코딩 커뮤니티" });
};

exports.communityOne = (req, res) => {
  res.render("communityOne", { title: "communityOne" });
};

exports.communityTwo = (req, res) => {
  res.render("communityTwo", { title: "communityTwo" });
};
