import express from 'express';
import dotenv from 'dotenv';
import eventBrokerRoute from './routes/route';
const app = express();

dotenv.config();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/',eventBrokerRoute);



app.listen(port, () => {
    console.log(`Event Broker running on port ${port}`);
});