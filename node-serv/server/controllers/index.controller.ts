import { Request, Response } from 'express'
import { Deferred } from '../../../source/services/Ajax';

export function indexWelcome(req: Request, res: Response) {
   res.json('node server started');
}

import * as fs from 'fs';
const filePath="/Users/shubham.si/Documents/node_server/build/bundle.js";


export function getConfigs(req: Request, res: Response){
    getBundleJsFile(req, res);
}




function getBundleJsFile(req: Request, res: Response){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

   res.status(200)
   res.header('Content-Type', 'application/javascript')


   fs.readFile(filePath, 'utf-8', function(err,bundlejs){
      if (!err) {
         console.log('file read');
         res.send(bundlejs);
      } else {
          console.log(err);
      }
  });
}

