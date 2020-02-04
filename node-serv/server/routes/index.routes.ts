import { Router } from 'express'
import { indexWelcome ,getConfigs} from '../controllers/index.controller'

const indexRouter = Router();

indexRouter.route('/')
    .get(indexWelcome);

indexRouter.route('/configs')
    .post(getConfigs);



export default indexRouter;