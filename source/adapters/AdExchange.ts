
import {PlacementProviderConfig, ProviderConfig} from '../config/Type';
import { Placement } from "../config/models/Placement";
import { BidRequestAdapter } from '../contracts/servicecontracts/BidRequestAdapter';
import RequestService from '../services/RequestService';

class AdExchnage implements BidRequestAdapter{

    private _reqMap;
    private _isAdExchange:boolean;

    constructor(){
        this._reqMap={};
        this._reqMap["url"]="http://localhost:3000/adexchange";
        this._reqMap["method"]="POST";
        this._reqMap["reqString"];
        this._isAdExchange=true;
    }

    public get isAdExchange(){
        return this._isAdExchange;
    }

    public setRequest(placement:Placement, providerConfig: ProviderConfig){

        const providerID:string = providerConfig.id;
        const placementProviderConfig:PlacementProviderConfig = placement.providers.find(providerID);

        let reqString=this.getRequestPayload(placement, placementProviderConfig);

        if(this._reqMap["reqString"]==undefined || this._reqMap["reqString"]==null){
            this._reqMap["reqString"]=reqString;
        }else{
            this._reqMap["reqString"]=this._reqMap["reqString"]+"|"+reqString;
        }
    }

    private getRequestPayload(placement:Placement, providerConfig: PlacementProviderConfig):string{
        
        let reqString=placement.id+"@"+providerConfig.id+"_"+placement.size+"_"+providerConfig.bidprice+"_"+providerConfig.revshare+"_"+providerConfig.epc+"_"+providerConfig.ecc+"_"+providerConfig.pubid;

        //console.log(reqString);

        return reqString;
    }

    public fireRequest():Promise<any>{
        let requestCall = RequestService.initiateRequest(this._reqMap);
        return requestCall;
    }


}

const adExchnage =new AdExchnage();
export default adExchnage;

