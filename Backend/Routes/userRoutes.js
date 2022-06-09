const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../Controllers/userController");
const { protect } = require("../Middlewares/authMiddleware");

const router = express.Router();

router.post("/login", authUser);
router.route("/").post(registerUser).get(protect, allUsers);

module.exports = router;
