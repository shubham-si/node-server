import AuctionManager from "../manager/AuctionManager";
import Logger from "../manager/LogManager";
import CoreModule from './CoreModule';



function loadAds(){

   let coreModule= new CoreModule();
   coreModule.init();

   coreModule.requestService().then((responses)=>{
      
      logProviderResponses(responses);

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

function logProviderResponses(providerResponses){
   let requestPayload={};

   providerResponses.forEach((providerResponseAdslotMap)=>{

      Object.keys(providerResponseAdslotMap).forEach((adSlotConfig)=>{

         let providerId= providerResponseAdslotMap[adSlotConfig].id;
         requestPayload[providerResponseAdslotMap[adSlotConfig].id] =requestPayload[providerId] || {};
         requestPayload[providerResponseAdslotMap[adSlotConfig].id][adSlotConfig]=requestPayload[providerResponseAdslotMap[adSlotConfig].id][adSlotConfig] || {};

         requestPayload[providerResponseAdslotMap[adSlotConfig].id][adSlotConfig]= providerResponseAdslotMap[adSlotConfig];

      });
   })

   Logger.log(requestPayload,1);
}

loadAds();