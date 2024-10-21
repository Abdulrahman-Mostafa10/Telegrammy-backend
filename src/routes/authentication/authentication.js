const router = require("express").Router();
const rateLimit = require("express-rate-limit");

const isAuthenticated = require("../../middlewares/isAuthenticated");

const {
  login,
  logout,
  accountRecovery,
} = require("../../controllers/auth/index");
const {
  signInWithGoogle,
  googleCallBack,
} = require("../../controllers/auth/googleAuthController");
const {
  signInWithGitHub,
  gitHubCallBack,
} = require("../../controllers/auth/githubAuthController");

const registrationController = require("../../controllers/auth/registration");

const resendPasswordTokenLimiter = require("../../middlewares/resendPasswordTokenLimiter");

router.get("/google", signInWithGoogle);
router.get("/google/secrets", googleCallBack);

router.get("/gitHub", signInWithGitHub);
router.get("/gitHub/secrets", gitHubCallBack);

router.post("/login", login);
router.post("/logout", isAuthenticated, logout);

router.post("/forget-password", accountRecovery.forgetPassword);

router.post(
  "/reset-password/resend",
  resendPasswordTokenLimiter,
  accountRecovery.resendResetToken
);

router.post(
  "/logout-from-all-devices",
  isAuthenticated,
  accountRecovery.logOutFromAllDevices
);

router.patch("/reset-password/:token", accountRecovery.resetPassword);

router.post("/register", registrationController.postRegistration);

router.post("/verfiy", registrationController.postVerfiy);

const resendLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 1,
  message: "Too many resend requests, please try again later",
});

router.post(
  "/resend-verification",
  resendLimiter,
  registrationController.resendVerification
);

module.exports = router;
