import { Request, Response } from 'express';
import {getResponse} from './provider.util';

export function sendResponseAmazon(req: Request, res: Response) {
    res.json(getResponse(req.body));                                    //{"Amazon":"$4"}
}
