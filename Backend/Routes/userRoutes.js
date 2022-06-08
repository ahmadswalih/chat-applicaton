const express = require("express");
const { registerUser } = require("../Controllers/userController");

const router = express.Router();

router.post("/", registerUser);

module.exports = router;
