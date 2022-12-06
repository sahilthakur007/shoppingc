const express = require('express')
const { signUp, signIn } = require('../controller/userController')
const Router = express.Router()

Router.route("/signup").post(signUp)
Router.route("/signIn").post(signIn)
module.exports = Router