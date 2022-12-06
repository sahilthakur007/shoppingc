const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const connectDatabase = require("./config/database")
const userRouter = require("./routes/userRouter")
const Cart = require("./routes/cartrouter")

app.use(bodyParser.urlencoded({ limit: "25mb", extended: true }))
app.use(bodyParser.json({ limit: "25mb", extended: true }))
app.use(cors())

connectDatabase()
const port = 5000
app.use("/user",userRouter)
app.use("/cart",Cart)
app.listen(port, () => {
    console.log(`app is listen at port ${port}`)
})