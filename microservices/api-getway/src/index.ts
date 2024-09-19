import express from 'express';
import dotenv from 'dotenv';
import apiGetwayRouter from './routes/route';
const app = express();

dotenv.config();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/api/v1',apiGetwayRouter);





app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});