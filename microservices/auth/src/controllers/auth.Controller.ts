import { Request, Response } from 'express';
import User from '../database/models/user.model';
import bycrypt from 'bcryptjs';

export const createUser= async (req: Request, res: Response) => {
  const { name,email, password } = req.body;
    try {
        const exitEmail = await User.findOne({ email: email});
         if(exitEmail){
           return res.status(400).json({message: 'El email ya esta registrado'});
   
         }
         const newUser = {
            name,
            email,
            password
         }
         const user = new User(newUser);
   
         //  Encriptar contraseña
         const salt = await bycrypt.genSalt(10);
         user.password = await bycrypt.hash(user.password, salt);
    await user.save()
      return res.status(201).json(user);
    
        } catch (error) {
            return res.status(500).json({message: 'Error al crear el usuario', error});
            }
} 




export const loginUser= async (req: Request, res: Response) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }
 

    const passwordMatch = await bycrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });


    }
    return res.status(200).json({ message: 'Usuario logueado',
    user: {
      id: user._id,
      name: user.name,
      email: user.email 

     }});
  } catch (error) {
    return res.status(500).json({ message: 'Error al loguear el usuario', error });
  }
}


