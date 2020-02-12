import AuctionManager from "../manager/AuctionManager";
import Logger from "../manager/LogManager";
import { providersMap } from "../config/ConfigBuilder";
import CoreModule from './CoreModule';



function loadAds(){

   //logParticipants();
   let coreModule= new CoreModule();
   coreModule.init();

   coreModule.requestService().then((responses)=>{
      console.log(JSON.stringify(responses));
      let auctionResult = new AuctionManager().conductAuction(responses);
      showAds(auctionResult);
   },err=>{
      err.send('OK error');
   });

};

function showAds(auctionResult){
   Object.keys(auctionResult).forEach((placementid,placementindex:number)=>{
      Object.keys(auctionResult[placementid]).forEach((sizeInf,sizeindex)=>{
          if(auctionResult[placementid][sizeInf].length>0){
              let iframe = document.getElementById('iframe_'+(placementindex+1));
              var iWindow = (<HTMLIFrameElement> iframe).contentWindow;
              let doc= iWindow.document;
              doc.open();
              doc.write(auctionResult[placementid][sizeInf][0].adcode);
              doc.close();
          }
      })
  })
}

function logParticipants(){
   let requestPayload=[];
   Object.keys(providersMap).forEach((adslotId,index)=>{
      Object.keys(providersMap[adslotId]).forEach((provider,_)=>{
         requestPayload.push({
            "id":providersMap[adslotId][provider].id,
            "ecc":providersMap[adslotId][provider].ecc,
            "epc":providersMap[adslotId][provider].epc,
         });
      })
   });

   console.log(requestPayload);
   Logger.log(requestPayload,1);
}

loadAds();