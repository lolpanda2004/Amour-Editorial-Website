import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({extended : true, limit : "16kb"}))
app.use(express.static("public"));  // to allow access to public assets
app.use(cookieParser())


// routes
import userRouter from './routes/user.route.js';

// routes declaration
app.use("/api/users", userRouter)

export {app}