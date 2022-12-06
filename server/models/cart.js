const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    image: {
        type:String
    },
    price:{
        type:Number
    }
})
module.exports = mongoose.model("Cart", cartSchema);