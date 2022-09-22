const express = require("express");
const { login } = require("../Controller/LoginController");
const { registration } = require("../Controller/registrationController");

const authRouter = express.Router();

authRouter.post("/registration", registration);
authRouter.post("/login", login);

module.exports = authRouter;
