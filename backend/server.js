import express from "express"
import connectToMongo from "./config/config.js"
import route from "./router/notesRoutes.js"
import dotenv from "dotenv"

const app = express()
dotenv.config({path: ".env"})

app.use(express.json())
app.use("/note", route)

const port=process.env.PORT;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

connectToMongo();
