import express from 'express';
import dotenv from 'dotenv';
import conversionHistoryRouter from './routes/conversionhistory.route';
const app = express();

dotenv.config();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/conversion-history', conversionHistoryRouter);



app.listen(port, () => {
    console.log(`Conversion History running on port ${port}`);
});