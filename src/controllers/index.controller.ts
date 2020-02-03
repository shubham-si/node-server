import { Request, Response } from 'express'
import AdaptarManager from '../services/AdaptarManager';
import AuctionManager from '../services/AuctionManager';
import Logger from '../services/LogManager';

export function indexWelcome(req: Request, res: Response) {
   res.json('node server started');
}

export function getConfigs(req: Request, res: Response){
   
   new AdaptarManager().makeRequestToProviders(req.body).then(responses=>{
         let auctionResult = new AuctionManager().conductAuction(responses);
         Logger.log(auctionResult,2);
        // console.log(auctionResult);
         res.send(auctionResult);
      },err=>{
         err.send('OK error');
      });
      
}



