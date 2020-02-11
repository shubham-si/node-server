import { Router } from 'express'
import {sendResponseAmazon} from '../../providers/amazon.controller'
import {sendResponseAppnexus} from '../../providers/appnexus.controller'
import {sendResponseOpenx} from '../../providers/openx.controller'
import { sendResponseRubicon } from '../../providers/rubicon.controller';
import { sendResponsePubmatics } from '../../providers/pubmatics.controller';
import { sendResponseSonobi} from '../../providers/sonobi.controller'

const providerRouter = Router();

providerRouter.route('/amazon')
    .post(sendResponseAmazon);

providerRouter.route('/appnexus')
    .post(sendResponseAppnexus);

providerRouter.route('/openx')
    .post(sendResponseOpenx);
    
providerRouter.route('/rubicon')
    .post(sendResponseRubicon);

providerRouter.route('/pubmatics')
    .post(sendResponsePubmatics);

providerRouter.route('/sonobi')
    .post(sendResponseSonobi);


export default providerRouter;
