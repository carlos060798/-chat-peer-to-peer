import axios from "axios" 
import { IConvert } from "../interfaces/convert.interface";

const convertApi= axios.create({
    baseURL: "http://localhost:3004/currency"

})


export const postConversion = async (requestData:IConvert) => {
    console.log('entro a postConversion');
    try {
        const {data}= await convertApi.post('/convert', requestData);
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: 'Error registarla conversion',
            error
        }
    }
}