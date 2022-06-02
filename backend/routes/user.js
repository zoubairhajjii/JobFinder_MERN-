const { forgotPassword, resetPassword } = require("../controllers/user/password");
const express = require("express");


const passwordRoute = express.Router();

// user forgot password route
passwordRoute.post('/forgot', forgotPassword)
// user reset password route
passwordRoute.put('/reset', resetPassword)
module.exports = passwordRoute;
