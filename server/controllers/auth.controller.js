const User = require("../models/User");
const { hashPassword, comparePassword } = require("../utils/hash");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User exists" });

  const hashed = await hashPassword(password);

  const user = await User.create({ email, password: hashed });

  const token = generateToken(user);

  res.json({ token, user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = generateToken(user);

  res.json({ token, user });
};

exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json({ user });
};