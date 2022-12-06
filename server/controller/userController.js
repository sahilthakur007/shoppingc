const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

const userModel = require('../models/userSchema')
exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
        return res.status(400).json({
            message: "Some Field is missing please include that"
        })

    }
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "Unable to found user "
            })
        }
        const ismatched = await bcrypt.compare(password, user.password);
        if (ismatched) {
            const token = jwt.sign({ email: user.email, id: user.id }, "user", { expiresIn: "60m" });
            res.status(200).json({
                user, token
            })
        }
        else {
            return res.status(404).json({
                message: "Unable to found user "
            })
        }

    }
    catch (error) {

        res.status(500).json({
            message: error
        })

    }
}

exports.signUp = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    if (!email || !password) {
        return res.status(400).json({
            message: "Some Field is missing please include that"
        })

    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            email, password: hashedPassword
        })
        const token = jwt.sign({ email: user.email, id: user.id }, "user", { expiresIn: "60m" });
        res.status(200).json({
            user, token
        })
    }
    catch (error) {
        res.status(500).json({
            message: error
        })
    }

}
