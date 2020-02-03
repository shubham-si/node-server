
import PlacementRepo, { providersConfig } from '../../source/config/ConfigBuilder';
import {Placement} from '../../source/config/models/Placement';
import { json } from 'body-parser';
import {PlacementProviderConfig} from '../../source/config/Type';
import {Ajax,Deferred} from '../services/Ajax';

import Logger from '../services/LogManager';

var defferedRequests =[];

console.log(defferedRequests.length);

export default class AdaptarManager{

async makeRequestToProviders(requestBody:any):Promise<any>{

    defferedRequests=[];
    PlacementRepo.each(placementCallback);

    let defer = new Deferred();

    //console.log("placement repo");
    //console.log(JSON.stringify(PlacementRepo));

    Promise.all(defferedRequests.map((reqParam,i)=>{
        return new Promise((resolve,reject)=>{
            try{
                new Ajax(reqParam.url,reqParam.data,reqParam.method).callService()
                .then((response)=>{
                    resolve(response)
                })
            }catch(err){
                reject(err);
            }
        })
    })).then((responses)=>{
        defer.resolve(responses);                   // {adslot:size:[{bidprice,adcode}]}
    });

    return defer.promise;

    }
}

var placementCallback = function(placement:Placement,index:number){

    placement.providers.each((provider, index)=> {
        makeBidRequest(placement, provider)
    });

}

function makeBidRequest(placement:Placement, providerConfig: PlacementProviderConfig){
    
    let urlProvider="http://localhost:3000/provider/"
    if(providerConfig.id.startsWith("AMZP")){
        urlProvider+="amazon"
    }else if(providerConfig.id.startsWith("APPNXP")){
        urlProvider+="appnexus"
    }else if(providerConfig.id.startsWith("OPNXP")){
        urlProvider+="openx"
    }

    let requestParams= getRequestData(placement,providerConfig,urlProvider,"POST");

    Logger.log(requestParams.data,1);

    defferedRequests.push(requestParams);

}

function getRequestData(placement:Placement, providerConfig: PlacementProviderConfig,urlProvider:string,method:string){
    return {
        "url":urlProvider,
        "data":{
            "bidFloorPrice":providerConfig.bidprice,
            "providerID":providerConfig.id,
            "adPlacementID":placement.id,
            "epc":providerConfig.epc,
            "ecc":providerConfig.ecc,
            "sizes":placement.size,
        },
        "method":method
    }
    

}


interface RequestFormat{
    providerId:string,
    epc:number,
    ecc:string,
    adslotId:number,
    sizes:[string]
}
