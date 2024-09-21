import { Request, Response } from 'express';
import User from '../database/models/user.model';
import bycrypt from 'bcryptjs';

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const exitEmail = await User.findOne({ email: email });
    if (exitEmail) return res.send({ status: 400, msg: 'the email is already in use' });
    const newUser = {
      name,
      email,
      password
    }
    const user = new User(newUser);
    const salt = await bycrypt.genSalt(10);
    user.password = await bycrypt.hash(user.password, salt);
    await user.save()
    return res.send({ status: 200, user });

  } catch (error) {
    return res.send({ message: ' Error processing request, check server response', error });
  }
} 




export const loginUser= async (req: Request, res: Response) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.send({ status: 404, message: 'user not found' });
    
    const passwordMatch = await bycrypt.compare(password, user.password);
    if (!passwordMatch)  return res.send({ status: 400, message: 'password incorrect' });

    return res.status(200).json({ message: 'Usuario logueado',
    user: {
      id: user._id,
      name: user.name,
      email: user.email 

     }});
  } catch (error) {
    return res.send({ message: ' Error processing request, check server response', error });
  }
}


