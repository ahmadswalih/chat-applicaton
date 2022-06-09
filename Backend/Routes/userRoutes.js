const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../Controllers/userController");

const router = express.Router();

router.post("/login", authUser);
router.route("/").post(registerUser).get(allUsers);

module.exports = router;
