import router from 'express';
import { eventBrokerController } from '../controllers/eventbroker.controller';

const route = router();

route.post('/events',eventBrokerController);

export default route;