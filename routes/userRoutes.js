const express = require("express");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
} = require("../controllers/authController");
const {
  updateMe,
  deleteMe,
  getMe,
  getUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);
router.patch("/updateMyPassword", protect, updatePassword);

router.get("/me", protect, getMe, getUser);
router.patch("/updateMe", protect, updateMe);
router.delete("/deleteMe", protect, deleteMe);

module.exports = router;
