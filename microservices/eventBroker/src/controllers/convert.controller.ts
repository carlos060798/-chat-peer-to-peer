import axios from "axios" 

const convertApi= axios.create({
    baseURL: "http://localhost:3004/currency"

})


export const postConversion = async () => {
    console.log('entro a postConversion');
    try {
        const {data}= await convertApi.post('/convert' );
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: 'Error registarla conversion',
            error
        }
    }
}