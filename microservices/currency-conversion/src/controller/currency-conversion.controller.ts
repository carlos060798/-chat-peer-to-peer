import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const  baseURL=  process.env.EXCHANGERATE_API_URL




console.log('EXCHANGERATE_API_URL', process.env.EXCHANGERATE_API_URL);
import { Request, Response } from 'express';
export  const postExchangerate = async (req: Request, res: Response) => { 
  const { to,from,amount } = req.body
  try {
   const {data} = await axios.get(`${baseURL}/${from}/${to}/${amount}`);  
   const result = {
    exchangerate:data.conversion_rate,
    amount:data.conversion_result
   }
    res.status(200).send(result);
    } catch (error) {
      console.log('Error processing request', error);
    res.status(500).send({
      message: 'Error processing request',
      error
    });
    

    }
}