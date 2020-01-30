import { Request, Response } from 'express'
import AdaptarManager from '../services/AdaptarManager';
import AuctionManager from '../services/AuctionManager';

export function indexWelcome(req: Request, res: Response) {
   res.json('node server started');
}

export function getConfigs(req: Request, res: Response){
   
   new AdaptarManager().makeRequestToProviders(req.body).then(responses=>{
         let auctionResult = new AuctionManager().conductAuction(responses);
         console.log(auctionResult)
         res.send(auctionResult);
      },err=>{
         err.send('OK error');
      });
      
}



