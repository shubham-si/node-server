import { Router } from 'express'
import {getResponseStream} from '../../providers/adexchange.controller'

const adexchangeRouter = Router();
//const adExchnageController =new AdExchnageController();

adexchangeRouter.route('/')
    .get(getResponseStream);


export default adexchangeRouter;