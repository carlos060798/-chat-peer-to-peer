
import { Router } from 'express';
import { postExchangerate } from '../controller/currency-conversion.controller';
const router = Router();

router.post('/convert', postExchangerate);

export default router;