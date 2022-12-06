const express = require("express");
const {sendItem, addItem, removeItem} = require("../controller/cartcontroller")
const Router = express.Router(); 
Router.route("/").get(sendItem);
Router.route("/cartadd").post(addItem);
Router.route("/cartremove/:id").patch(removeItem);
module.exports = Router; 