const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");
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
router.get("/javascript/types", courseController.javaScriptOne);
router.get("/javascript/javaScriptTwo", courseController.javaScriptTwo);
router.get("/javascript/javaScriptThree", courseController.javaScriptThree);
router.get("/javascript/javaScriptFour", courseController.javaScriptFour);

router.get("/", courseController.homePage);
router.get("/courses", catchErrors(courseController.getCourses));
router.get("/course/:slug", catchErrors(courseController.getCourseBySlug));

router.get("/stores", catchErrors(storeController.getStores));
router.get("/stores/page/:page", catchErrors(storeController.getStores));
router.get("/add", authController.isLoggedIn, storeController.addStore);

router.post(
  "/add",
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.createStore)
);
router.post(
  "/add/:id",
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.updateStore)
);

router.get("/stores/:id/edit", catchErrors(storeController.editStore));
router.get("/store/:slug", catchErrors(storeController.getStoreBySlug));

router.get("/tags", catchErrors(storeController.getStoresByTag));
router.get("/tags/:tag", catchErrors(storeController.getStoresByTag));

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
  catchErrors(storeController.getHearts)
);

router.post(
  "/reviews/:id",
  authController.isLoggedIn,
  catchErrors(reviewController.addReview)
);

router.get("/top", catchErrors(storeController.getTopStores));

/*
  API
*/
router.get("/api/search", catchErrors(storeController.searchStores));
router.post("/api/stores/:id/heart", catchErrors(storeController.heartStore));

module.exports = router;
