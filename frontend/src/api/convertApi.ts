import { IRegisterLog } from '../interfaces/registerlog.interface';
import { ICurrencyConversion } from '../interfaces/convert.interface';
import api from '../lib/axios';

import { AxiosError } from 'axios';



export const Convercurrency = async (data: ICurrencyConversion) => {
    console.log(data) 
    
    const event = "CONVERT_CURRENCY"
    const userid = localStorage.getItem('userid')  as string

    try {
        const response = await api.post('/api/v1', {
            event,
            data
        });
   
         console.log(response.data)
        const newdata = {
            userid,
            fromCurrency: data.from,
            toCurrency: data.to,
            amount: data.amount,
            result: response.data.amount
        }
        console.log(newdata)
        registerLog(newdata)
        return newdata
    }


    catch (error) {
        const err = error as AxiosError;
        return err.response?.data;
    }
    
    };

    const registerLog = async (data: IRegisterLog) => {
        const event = "REGISTER_CONVERT"
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
    } 

    export	const getLogs = async () => {
        const userid = localStorage.getItem('userid')  as string

        const event = "CONVERSATION_HISTORY"
        try {
            const response = await api.post('/api/v1', {
                event,
                data: { userid }

            });
            console.log(response)
            return response.data;
        } catch (error) {
            const err = error as AxiosError;
            return err.response?.data;
        }
    }