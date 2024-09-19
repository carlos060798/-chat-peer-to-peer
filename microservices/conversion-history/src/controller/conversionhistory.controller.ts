import { Request, Response } from 'express';
export const getHistory=async(req: Request, res: Response) =>{
   res.send('get Conversion History');
}

export  const postCreateregister= async (req: Request, res: Response) => {
   
    res.send('post Createregister');
}