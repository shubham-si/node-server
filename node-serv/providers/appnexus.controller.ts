import { Request, Response } from 'express';
import {getResponse} from './provider.util';

export function sendResponseAppnexus(req: Request, res: Response) {
    res.json(getResponse(req.body));                                    
}