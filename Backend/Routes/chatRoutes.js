const express = require("express");
const { protect } = require("../Middlewares/authMiddleware");
const {
  accessChat,
  fetchChat,
  createGroupChat,
  renameGroupChat,
} = require("../Controllers/chatController");
const router = express.Router();

router.route("/").post(protect, accessChat).get(protect, fetchChat);
router.route("/group").post(protect, createGroupChat);
router.put("/rename", protect, renameGroupChat);
// router.route("/groupremove").put(protect,removeFromGroup)
// router.route("/groupadd").put(protect,addToGroup)

module.exports = router;
