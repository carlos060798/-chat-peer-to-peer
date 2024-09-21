import { Request, Response } from 'express';
import axios from 'axios';


export const postEvent = async (req: Request, res: Response) => {

    const { event, data: requestData } = req.body
    console.log({
        msg: 'Event sending',
        event,
        data: requestData
    });


    if (!event) return res.status(400).send('Event is required');

    if (!requestData || Object.keys(requestData).length === 0) return res.status(400).json({ msg: 'Data cannot be empty' });



    try {
        const { data } = await axios.post('http://localhost:3001/events', {
            event,
            data: requestData

        });
        return res.status(200).send(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send(
            {
                msg: 'internal server error',
                error
            }
        );
    }


}