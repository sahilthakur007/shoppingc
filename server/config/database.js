const mongoose = require("mongoose")

const connectDatabase = () => {
    const url = "mongodb+srv://RegistrationDetails:sahil@cluster0.0lm2s.mongodb.net/test"
    mongoose.connect(url).then(()=>console.log("Database is connected succesfully")).catch((error)=>console.log(error))
}
module.exports = connectDatabase