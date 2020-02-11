import {placementRepo,providerRepo} from '../config/ConfigBuilder';
import AdapterResolver from '../resolver/AdapterResolver';
import {Placement} from '../config/models/Placement';
import { Deferred, Ajax } from '../services/Ajax';
import RequestService from '../services/RequestService';


export default class CoreModule{

    private static _adapterResolver:AdapterResolver;
    private static batchedJobQueueMap;

    constructor(){
        CoreModule._adapterResolver=new AdapterResolver();
        CoreModule.batchedJobQueueMap={};
    }

    public init(){
        placementRepo.each(this.placementCallback);
    }

    private placementCallback(placement:Placement,index:number){
        placement.providers.each((provider, index)=> {
            
            let providerInf= providerRepo.find(provider.id);
            let adapterRequest= CoreModule._adapterResolver.getInstanceAdapter(providerInf,placement,provider);

            if(providerInf.entrypoint=="AdExchange"){
                CoreModule.batchedJobQueueMap["AdExchange"] =adapterRequest;
            }else{
                CoreModule.batchedJobQueueMap[providerInf.id] =adapterRequest;
            }

        });
    }

    public requestService():Promise<any>{

        let defferedRequests=[];
        
        Object.keys(CoreModule.batchedJobQueueMap).forEach((adapter)=>{
            if(adapter=="AdExchange"){
                RequestService.initiateRequest(CoreModule.batchedJobQueueMap["AdExchange"]); 
            }else{
                 defferedRequests.push(CoreModule.batchedJobQueueMap[adapter]);    
            }
        });

        let defer = new Deferred();

        Promise.all(defferedRequests.map((reqParam,i)=>{
            return new Promise((resolve,reject)=>{
                try{
                    new Ajax(reqParam.url,reqParam.reqPayload,reqParam.method).callService()
                    .then((response)=>{
                        resolve(response)
                    })
                }catch(err){
                    reject(err);
                }
            })
        })).then((responses)=>{
            console.log(responses);
            defer.resolve(responses);                   // {adslot:size:[{bidprice,adcode}]}
        });

        return defer.promise;

    }
}