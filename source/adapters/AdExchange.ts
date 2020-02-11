
import {PlacementProviderConfig} from '../config/Type';
import { Placement } from "../config/models/Placement";

class AdExchnage{

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

    public getRequest(placement:Placement, providerConfig: PlacementProviderConfig,providerId?:string):any{

        let reqString=this.getRequestPayload(placement, providerConfig,providerId);
        if(this._reqMap["reqString"]==undefined || this._reqMap["reqString"]==null){
            this._reqMap["reqString"]=reqString;
        }else{
            this._reqMap["reqString"]=this._reqMap["reqString"]+"|"+reqString;
        }
        return this._reqMap;
    }

    private getRequestPayload(placement:Placement, providerConfig: PlacementProviderConfig,providerId?:string):string{
        let reqString=placement.id+"@"+providerId+"*"+placement.size+"_"+providerConfig.epc+"_"+providerConfig.ecc;
        return reqString;
    }


}

const adExchnage =new AdExchnage();
export default adExchnage;

