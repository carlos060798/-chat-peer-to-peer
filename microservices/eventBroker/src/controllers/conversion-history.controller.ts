import axios from "axios" 
import { IRegisterlog } from "../interfaces/Registerlog.interface";


const productsApi= axios.create({
    baseURL: "http://localhost:3003/conversion-history"

})
export const getAllhistory = async (userid:string) => { 
    console.log('userid', userid);
    try {
        const { data } = await productsApi.get(`/all/${userid}`);
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: ' Error getting history',
            error
        }
    }

} 

export const postCreateregister = async (requestData:IRegisterlog) => {
    console.log('requestData', requestData);
    try {
        const { data } = await productsApi.post('/created',requestData); 
        return data;
       
    } catch (error) {
        console.error(error);
        return {
            msg: 'Error creating history',
            error
        }
    }
}