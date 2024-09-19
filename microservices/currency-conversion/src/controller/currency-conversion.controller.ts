
import { Request, Response } from 'express';
export  const postExchangerate = async (req: Request, res: Response) => { 
  try {
    console.log('entro a postExchangerate');
    res.send(' Currency conversion created');
    } catch (error) {
    res.status(500).send({
      message: 'Error processing request',
      error
    });
    

    }
}