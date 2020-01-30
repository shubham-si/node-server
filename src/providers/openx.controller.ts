import { Request, Response } from 'express';
import {getResponse} from './provider.util';

export function sendResponseOpenx(req: Request, res: Response) {
    res.json(getResponse(req.body));                                    
}