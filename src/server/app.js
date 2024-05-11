import express from "express"
import "./ensureEnv.js"
import "./db/index.js"
// import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// import routes
import userRouter from "./routes/user.routes.js"
import studentCardRouter from "./routes/studentCard.routes.js"
import coursesRouter from "./routes/courses.routes.js" 

// declare routes
app.use("/api/v1/user", userRouter)
app.use("/api/v1/student", studentCardRouter)
app.use("/api/v1/courses", coursesRouter)

export default app
