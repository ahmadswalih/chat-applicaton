const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields");
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already Exist");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    userToken,
  });
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create New User");
  }
});
module.exports = { registerUser };
