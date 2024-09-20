import axios from "axios" 
import { IUser, IUserLogin } from "../interfaces/user.interface";

const productsApi= axios.create({
    baseURL: "http://localhost:3002/auth"

})

    export const postCreateUser = async (requestData:IUser  ) => { 
        console.log('requestData', requestData);
    try {
        const { data } = await productsApi.post('/register',requestData);
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: ' Error creating user',
            error
        }
    }

} 

export const postLoginUser = async (requestData:IUserLogin) => { 
    console.log('requestData', requestData);
    try {
        const { data } = await productsApi.post('/login',requestData);
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: ' Error creating user',
            error
        }
    }

} 



