import dotenv from 'dotenv'
import { connectDB } from './config/dbConfig.js'
import { app } from './app.js'

dotenv.config({path : './.env'})

connectDB()
        .then(() => {
            app.listen(8000 || process.env.PORT, () => {
                console.log("App is listening")
            })
        })
        .catch((error) => {
            console.log('error connecting app',error)
        })
