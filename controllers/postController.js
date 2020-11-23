const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const User = mongoose.model("User");
const multer = require("multer"); // image upload
const jimp = require("jimp"); // file size control
const uuid = require("uuid"); // unique id generator

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith("image/");
    if (isPhoto) {
      next(null, true);
    } else {
      next({ message: "That filetype isn't allowed!" }, false);
    }
  },
};

exports.addPost = (req, res) => {
  res.render("editPost", { title: "포스팅 하기" });
};

exports.upload = multer(multerOptions).single("photo");

exports.resize = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }
  const extension = req.file.mimetype.split("/")[1];
  req.body.photo = `${uuid.v4()}.${extension}`;
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, jimp.AUTO);
  await photo.write(`./public/uploads/${req.body.photo}`);

  next();
};

exports.createPost = async (req, res) => {
  req.body.author = req.user._id;
  const post = await new Post(req.body).save();
  req.flash(
    "success",
    `Successfully Created ${post.name}. Care to leave a review?`
  );
  res.redirect(`/posts/${post.slug}`);
};

exports.getPosts = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 6;
  const skip = page * limit - limit;
  const postsPromise = Post.find()
    .skip(skip)
    .limit(limit)
    .sort({ created: "desc" });
  const countPromise = Post.count();
  const [posts, count] = await Promise.all([postsPromise, countPromise]);
  const pages = Math.ceil(count / limit);
  if (!posts.length && skip) {
    req.flash(
      "info",
      `You asked for page ${page}. But that doesn't exist. So I put you on page ${pages}`
    );
    res.redirect(`/posts/page/${pages}`);
    return;
  }
  res.render("posts", { title: "Posts", posts, page, pages, count });
};

const confirmOwner = (post, user) => {
  if (!post.author.equals(user._id)) {
    throw Error("You must own a post in order to edit it!");
  }
};

exports.editPost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  // 2. confirm they are the owner of the post
  confirmOwner(post, req.user);
  // 3. Render out the edit form so the user can update their post
  res.render("editPost", { title: `Edit ${post.name}`, post });
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, // return the new post instead of the old one
    runValidators: true,
  }).exec();
  req.flash(
    "success",
    `Successfully updated <strong>${post.name}</strong>. <a href="/posts/${post.slug}">View Post ➡️</a>`
  );
  res.redirect(`/posts/${post._id}/edit`);
};

exports.getPostBySlug = async (req, res, next) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate(
    "author reviews"
  ); // populate will go find
  if (!post) return next();
  res.render("post", { post, title: post.name });
};

exports.getPostsByTag = async (req, res) => {
  const tag = req.params.tag;
  const tagQuery = tag || { $exists: true };
  const tagsPromise = Post.getTagsList();
  const postsPromise = Post.find({ tags: tagQuery });
  const [tags, posts] = await Promise.all([tagsPromise, postsPromise]);
  res.render("tag", { tags, title: "Tags", tag, posts });
};

exports.searchPosts = async (req, res) => {
  const posts = await Post.find(
    {
      $text: {
        $search: req.query.q,
      },
    },
    {
      score: { $meta: "textScore" },
    }
  ).sort({
    score: { $meta: "textScore" },
  });
  // .limit(5);
  res.json(posts);
};

exports.heartPost = async (req, res) => {
  const hearts = req.user.hearts.map((obj) => obj.toString());
  const operator = hearts.includes(req.params.id) ? "$pull" : "$addToSet";
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { [operator]: { hearts: req.params.id } },
    { new: true }
  );
  res.json(user);
};

exports.getHearts = async (req, res) => {
  const posts = await Post.find({
    _id: { $in: req.user.hearts },
  });
  res.render("posts", { title: "Hearted Posts", posts });
};

exports.getTopPosts = async (req, res) => {
  const posts = await Post.getTopPosts();
  res.render("home", { posts, title: `⭐ Top Posts` });
};
