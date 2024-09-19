import { Router } from "express"
import { getHistory,postCreateregister} from "../controller/conversionhistory.controller";

const router = Router();

router.get('/all', getHistory);
router.post('/created', postCreateregister);


export default router;