import express from 'express'
import bodyParser  from 'body-parser';
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import genralRoutes from './routes/genralRoutes.js'
import cookieParser from 'cookie-parser'
import multer from 'multer';
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs'
const app = express();
app.use(cors())

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use('/images', express.static(path.join(__dirname, '/images')))
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    }, filename: (req, file, cb) => 
    {
        cb(null, req.body.name);
    }
}
)
const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('File is uploaded')
}
)


dotenv.config()


app.use(cookieParser());
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

// DataBase Connection
connectDB();

app.get('/',(req,res)=>{
    res.send('Hello to API')
})


app.use('/api', userRoutes)
app.use('/api', genralRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`))