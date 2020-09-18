const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const courseController = require("../controllers/courseController");
const reviewController = require("../controllers/reviewController");
const preparationController = require("../controllers/preparationController");
const { catchErrors } = require("../handlers/errorHandlers");

router.get("/preparation", preparationController.preparationPage);
router.get("/preparation/preparationOne", preparationController.preparationOne);
router.get("/preparation/preparationTwo", preparationController.preparationTwo);
router.get(
  "/preparation/preparationThree",
  preparationController.preparationThree
);
router.get(
  "/preparation/preparationFour",
  preparationController.preparationFour
);

router.get("/javascript", courseController.javaScript);
router.get("/javascript/types", courseController.javaScriptTypes);
router.get("/javascript/declaration", courseController.javaScriptDeclaration);
router.get("/javascript/operators", courseController.javaScriptOperators);
router.get("/javascript/javaScriptFour", courseController.javaScriptFour);

// router.get("/", courseController.homePage);
// router.get("/courses", catchErrors(courseController.getCourses));
// router.get("/course/:slug", catchErrors(courseController.getCourseBySlug));

router.get("/posts", catchErrors(postController.getPosts));
router.get("/posts/page/:page", catchErrors(postController.getPosts));
router.get("/add", authController.isLoggedIn, postController.addPost);

router.post(
  "/add",
  postController.upload,
  catchErrors(postController.resize),
  catchErrors(postController.createPost)
);
router.post(
  "/add/:id",
  postController.upload,
  catchErrors(postController.resize),
  catchErrors(postController.updatePost)
);

router.get("/posts/:id/edit", catchErrors(postController.editPost));
router.get("/posts/:slug", catchErrors(postController.getPostBySlug));

router.get("/tags", catchErrors(postController.getPostsByTag));
router.get("/tags/:tag", catchErrors(postController.getPostsByTag));

router.get("/register", userController.registerForm);
router.post(
  "/register",
  userController.validateRegister,
  userController.register,
  authController.login
);

router.get("/login", userController.loginForm);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.get("/account", authController.isLoggedIn, userController.account);
router.post("/account", catchErrors(userController.updateAccount));
router.post("/account/forgot", catchErrors(authController.forgot));
router.get("/account/reset/:token", catchErrors(authController.reset));
router.post(
  "/account/reset/:token",
  authController.confirmedPasswords,
  catchErrors(authController.update)
);

router.get(
  "/hearts",
  authController.isLoggedIn,
  catchErrors(postController.getHearts)
);

router.post(
  "/reviews/:id",
  authController.isLoggedIn,
  catchErrors(reviewController.addReview)
);

router.get("/top", catchErrors(postController.getTopPosts));

/*
  API
*/
router.get("/api/search", catchErrors(postController.searchPosts));
router.post("/api/posts/:id/heart", catchErrors(postController.heartPost));

module.exports = router;
