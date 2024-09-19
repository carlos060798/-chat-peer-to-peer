import express from 'express';
import dotenv from 'dotenv';
import  authRouter from './routes/auth.Route';
const app = express();

dotenv.config();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/auth', authRouter);



app.listen(port, () => {
    console.log(`Auth running on port ${port}`);
});