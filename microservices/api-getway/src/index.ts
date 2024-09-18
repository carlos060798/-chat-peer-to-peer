import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
const app = express();

dotenv.config();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post('/api/v1', async(req, res) => {
   const { event,data:requestData} = req.body 
   console.log({
    msg: 'Event sending',
    event,
    data: requestData
    });
  

    if (!event)  return  res.status(400).send('Event is required'); 

    
        try {
            const { data } = await axios.post('http://localhost:3001/events',{
                event,
                data:requestData

            });
            return res.status(200).send(data);
        } catch (error) {
            console.error(error);
            return res.status(500).send(
                {
                    msg: 'internal server error',
                    error
                }
            );
        }
    
    
  
     

    
});



app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});