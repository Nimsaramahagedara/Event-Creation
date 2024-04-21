import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv'
import { dbConfig } from './utils/dbConfig.js';
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001


app.use(morgan('combined'));

dbConfig().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    })
})





