import { useState } from 'react';
import { IRegisterLog } from '../interfaces/registerlog.interface';

export function useMessage() {
    const oldMessages = () => {
        const messages = localStorage.getItem('chatMessages');
        if (messages) {
            return JSON.parse(messages);
        }
        return [];
    }
    const [Messages, setMessages] = useState<string[]>(oldMessages);

    const dataMenssages = (message: IRegisterLog) => {
        const conversionMessage = `se quiere, Convertido ${message.amount} de ${message.fromCurrency} 
        a ${message.toCurrency}, Resultado: ${message.result}`;


        const updatedMessages = [...Messages, conversionMessage];
        setMessages(updatedMessages);
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));

        return updatedMessages;
    };

    return { Messages, dataMenssages };
}
