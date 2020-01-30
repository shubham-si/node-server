import { Router } from 'express'
import {sendResponseAmazon} from '../providers/amazon.controller'
import {sendResponseAppnexus} from '../providers/appnexus.controller'
import {sendResponseOpenx} from '../providers/openx.controller'

const providerRouter = Router();

providerRouter.route('/amazon')
    .post(sendResponseAmazon);

providerRouter.route('/appnexus')
    .post(sendResponseAppnexus);

providerRouter.route('/openx')
    .post(sendResponseOpenx);


export default providerRouter;
