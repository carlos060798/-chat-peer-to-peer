import express from 'express';
import dotenv from 'dotenv';
import apiGetwayRouter from './routes/route';
import cors from 'cors';
const app = express();

dotenv.config();
app.use(express.json());
// Configuración de CORS
const corsOptions = {
    origin:  process.env.URL_FRONTEND,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si necesitas permitir cookies
    optionsSuccessStatus: 204 // Para algunos navegadores viejos
};
console.log(process.env.URL_FRONTEND)
app.use(cors(corsOptions));
const port = process.env.PORT

app.use('/api/v1',apiGetwayRouter);






app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});