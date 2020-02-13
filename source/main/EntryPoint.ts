import AuctionManager from "../manager/AuctionManager";
import Logger from "../manager/LogManager";
import CoreModule from './CoreModule';



function initHB(){

   let coreModule= new CoreModule();
   coreModule.init();

};

initHB();