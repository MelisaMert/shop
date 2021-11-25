import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log("DB Connection Success")).catch(err => console.log(err));

app.get('/', (req,res) => {
    res.status(200).json({message: "welcome"})
})
app.use(express.json({limit: '50mb'}));
app.use(cors({origin: 'http://localhost:3000'}));

app.listen(process.env.PORT,()=> {
    console.log(`Backend server is running`);
})