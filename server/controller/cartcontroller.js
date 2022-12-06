
Cart = require("../models/cart")

exports.sendItem = async (req, res) => {
    const cartItems = await Cart.find();
    if (!cartItems) {
        return res.status(401).json({
            message: "Somthings is wrong"
        })
    }

    res.status(201).json({
        message: "data sended sussefully",
        cartItems
    })
}
exports.addItem = async (req, res) => {
    const { name, image, price } = req.body;
    const newItem = await Cart.create({
        name, image, price
    })
    if (!newItem) {
        return res.status(501);
    }
    res.status(201).json({
        message: "Item added succesfully "
    });
}
exports.removeItem = async (req, res) => {
    // const allCartItems = await Cart.find({_id:req.params.id});
    // await allCartItems.save(); 
    const  data  = await Cart.deleteOne({ _id: req.params.id });
    console.log(data);
    if(!data.acknowledged)
    {
        return res.status(504).json({
            message:"something  is wrong "
        })
    }
    res.status(201).json({
        message: "succesfull"
    })
}