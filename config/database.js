import mongoose from 'mongoose'
import "dotenv/config.js";

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))