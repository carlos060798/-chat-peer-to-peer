import express from 'express';
import dotenv from 'dotenv';
import currencyRoute from './router/currency-conversion.route';
const app = express();

dotenv.config();
app.use(express.json());
const port = process.env.PORT 

app.use('/currency', currencyRoute);


app.listen(port, () => {
    console.log(` Currency Conversion running on port ${port}`);
});