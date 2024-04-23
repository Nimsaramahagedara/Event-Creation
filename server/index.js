import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv'
import { dbConfig } from './utils/dbConfig.js';
import eventRouter from './routes/EventRoutes.js';
import cors from 'cors';

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static('uploads'));
app.use(express.json())
app.use(cors());
app.use(morgan('dev'));
app.use('/event',eventRouter)

dbConfig().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    })
})





