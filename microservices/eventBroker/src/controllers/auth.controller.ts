import axios from "axios" 

const productsApi= axios.create({
    baseURL: "http://localhost:3002/auth"

})
export const postCreateUser = async () => { 
    try {
        const { data } = await productsApi.post('/register');
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: ' Error creating user',
            error
        }
    }

} 

export const postLoginUser = async () => { 
    try {
        const { data } = await productsApi.post('/login');
        return data;
    } catch (error) {
        console.error(error);
        return {
            msg: ' Error creating user',
            error
        }
    }

} 



