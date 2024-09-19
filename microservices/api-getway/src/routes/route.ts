import router from 'express';
import { postEvent } from '../controllers/apigetway.controller';

const route = router();

route.post('/',postEvent);

export default route;