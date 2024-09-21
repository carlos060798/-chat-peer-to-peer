
import { IUser, IUserLogin  } from '../interfaces/user.interface';
import api from '../lib/axios';

import { AxiosError} from 'axios';



export const createAcount = async (data:IUser) => {
  const  event = "REGISTER_CREATED" 
 
  try {
    const response = await api.post('/api/v1', {
      event,
      data
    });
   
    return response.data.message;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};


export const loginUser = async (data: IUserLogin ) => {
  const  event = "LOGIN_USER" 
 
  try {
    const response = await api.post('/api/v1', {
      event,
      data
    });
    localStorage.setItem('userid', response.data.user.id);
    return response.data.message;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};




