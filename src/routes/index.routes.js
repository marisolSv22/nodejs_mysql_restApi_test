import { Router } from 'express'
import { ping} from '../controllers/IndexController.js'

const router = Router()

router.get('/ping', ping);

export default router