const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const { signupSchema } = require("../validations/auth.validation");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/signup", validate(signupSchema), authController.signup);
router.post("/login", validate(signupSchema), authController.login);
router.get("/me", authMiddleware, authController.getMe);

module.exports = router;