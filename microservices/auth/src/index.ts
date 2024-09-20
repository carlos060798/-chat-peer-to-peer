import express from 'express';
import dotenv from 'dotenv';
import  authRouter from './routes/auth.Route';
import { conectarBD } from './database/config';

const app = express();
const port = process.env.PORT ;

dotenv.config();
conectarBD();
app.use(express.json());

app.use('/auth', authRouter);



app.listen(port, () => {
    console.log(`Auth running on port ${port}`);
});