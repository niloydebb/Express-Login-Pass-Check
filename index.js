const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["Get", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-type", "Authorization"]
}))

const apiRouter = require("./router/api")
app.use("/api", apiRouter)

app.listen(process.env.PORT, () => {
    console.log("Server is running")
})