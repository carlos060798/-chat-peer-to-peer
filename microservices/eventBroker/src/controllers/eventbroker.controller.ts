import { Request, Response } from 'express';
import { eventEnum } from '../enums/eventEnum';
import { postCreateUser,postLoginUser} from './auth.controller';
import { getAllhistory, postCreateregister } from './conversion-history.controller';
import { postConversion } from './convert.controller';




export const eventBrokerController = async (req: Request, res: Response) => {
    const {  data } = req.body;
    const event = req.body.event.toUpperCase(); 
    console.log('event', event);

    try{
    
        if(event === eventEnum.REGISTER_CREATED){
            const user= await postCreateUser();
            return res.status(201).send(user);
        }
        if(event === eventEnum.LOGIN_USER){
            const userLogin = await postLoginUser();
            return res.status(200).send(userLogin);
        }
        if(event === eventEnum.CONVERSATION_HISTORY){
            const response = await getAllhistory();
            return res.status(200).send(response);
        }
        if(event === eventEnum.CONVERT_CURRENCY){
            console.log('entro a convert');
            const exchangeConvert= await postConversion();
            console.log('exchangeConvert', exchangeConvert);
            return res.status(201).send(exchangeConvert);
        }
        if(event === eventEnum.REGISTER_CONVERT){
            const response = await postCreateregister();
            return res.status(201).send(response);
        }
   




    return res.status(404).send('Event not found'); 
     } catch (error) {
        return res.status(500).send({
            message: 'Error processing request',
            error
        });
     }

}