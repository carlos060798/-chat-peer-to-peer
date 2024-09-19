import { Request, Response } from 'express';

export const createUser= async (req: Request, res: Response) => {

    return res.status(200).send('User created');
} 


export const loginUser= async (req: Request, res: Response) => {

    return res.status(200).send('User logged in');
}