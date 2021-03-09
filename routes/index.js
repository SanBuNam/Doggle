const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const courseController = require("../controllers/courseController");
const reviewController = require("../controllers/reviewController");
const { catchErrors } = require("../handlers/errorHandlers");

// GET routes
router.get("/", catchErrors(postController.getTopPosts));
router.get("/javascript", courseController.javaScript);
router.get("/javascript/types", courseController.javaScriptTypes);
router.get("/javascript/declaration", courseController.javaScriptDeclaration);
router.get("/javascript/operators", courseController.javaScriptOperators);
router.get("/javascript/control-flow", courseController.javaScriptControlFlow);
router.get("/posts", catchErrors(postController.getPosts));
router.get("/posts/page/:page", catchErrors(postController.getPosts));
router.get("/posts/:id/edit", catchErrors(postController.editPost));
router.get("/posts/:slug", catchErrors(postController.getPostBySlug));
router.get("/add-post", authController.isLoggedIn, postController.addPost);
router.get("/tags", catchErrors(postController.getPostsByTag));
router.get("/tags/:tag/page/:page", catchErrors(postController.getPostsByTag));
router.get("/tags/page/:page", catchErrors(postController.getPostsByTag));
router.get("/register", userController.registerForm);
router.get("/login", userController.loginForm);
router.get("/logout", authController.logout);
router.get("/account", authController.isLoggedIn, userController.account);
router.get("/account/reset/:token", catchErrors(authController.reset));
router.get("/hearts", authController.isLoggedIn, catchErrors(postController.getHearts));

// POST routes
router.post(
  "/add-post",
  postController.upload,
  catchErrors(postController.resize),
  catchErrors(postController.createPost)
);
router.post(
  "/add-post/:id",
  postController.upload,
  catchErrors(postController.resize),
  catchErrors(postController.updatePost)
);
router.post(
  "/register",
  userController.validateRegister,
  userController.register,
  authController.login
);
router.post("/login", authController.login);
router.post("/account", catchErrors(userController.updateAccount));
router.post("/account/forgot", catchErrors(authController.forgot));
router.post(
  "/account/reset/:token",
  authController.confirmedPasswords,
  catchErrors(authController.update)
);
router.post(
  "/reviews/:id",
  authController.isLoggedIn,
  catchErrors(reviewController.addReview)
);

// router.get("/top", catchErrors(postController.getTopPosts));

// API
router.get("/api/search", catchErrors(postController.searchPosts));
router.post("/api/posts/:id/heart", catchErrors(postController.heartPost));

module.exports = router;
