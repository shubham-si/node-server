import {PlacementProviderConfig, ProviderConfig} from '../config/Type';
import { Placement } from "../config/models/Placement";
import { BidRequestAdapter } from '../contracts/servicecontracts/BidRequestAdapter';
import { Ajax } from '../services/Ajax';

class AppnexusAdapter implements BidRequestAdapter{

    private reqMap;  //:ClientSideDSP;
    private _isAdExchange:boolean;


    constructor(){
        this.reqMap={};
        this.reqMap["url"]="http://localhost:3000/provider/appnexus";
        this.reqMap["method"]="POST";
        this.reqMap["reqPayload"]={};
        this._isAdExchange=false;
    }

    public get isAdExchange(){
        return this._isAdExchange;
    }

    public setRequest(placement:Placement, providerConfig: ProviderConfig){
        
        const providerID = providerConfig.id;
        const placementProviderConfig:PlacementProviderConfig = placement.providers.find(providerID);

        let reqdata=this.getRequestPayload(placement.size, placementProviderConfig);
        this.reqMap.reqPayload[placement.id]=reqdata;
    }

    private getRequestPayload(size:string, providerConfig: PlacementProviderConfig):any{

        let reqObject={};
        Object.keys(providerConfig).forEach((key)=>{
            reqObject[key]=providerConfig[key];
        });

        reqObject["size"] = size;
        return reqObject;
    }

    public fireRequest():Promise<any>{
        let requestCall =new Ajax(this.reqMap.url,this.reqMap.reqPayload,this.reqMap.method).callService();
        return requestCall;
    }


}

const appnexusAdapter =new AppnexusAdapter();
export default appnexusAdapter;

