import axios from "axios" 

const productsApi= axios.create({
    baseURL: "http://localhost:3003/conversion-history"

})
export const getAllhistory = async () => { 
    try {
        const { data } = await productsApi.get('/all');
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: ' Error getting history',
            error
        }
    }

} 

export const postCreateregister = async () => {
    try {
        const { data } = await productsApi.post('/created' );
        return data;
       
    } catch (error) {
        console.error(error);
        return {
            msg: 'Error creating history',
            error
        }
    }
}