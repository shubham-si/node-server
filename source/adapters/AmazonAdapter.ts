import {PlacementProviderConfig} from '../config/Type';
import { Placement } from "../config/models/Placement";

class AmazonAdapter{

    private reqMap;  //:ClientSideDSP;
    private _isAdExchange:boolean;


    constructor(){
        this.reqMap={};
        this.reqMap["url"]="http://localhost:3000/provider/amazon";
        this.reqMap["method"]="POST";
        this.reqMap["reqPayload"]={};
        this._isAdExchange=false;
    }

    public get isAdExchange(){
        return this._isAdExchange;
    }

    public getRequest(placement:Placement, providerConfig: PlacementProviderConfig):any{

        let reqdata=this.getRequestPayload(placement, providerConfig);
        this.reqMap.reqPayload[placement.id]=reqdata;
        return this.reqMap
    }

    private getRequestPayload(placement:Placement, providerConfig: PlacementProviderConfig):any{

        let reqObject={};
        Object.keys(providerConfig).forEach((key)=>{
            reqObject[key]=providerConfig[key];
        });

        reqObject["size"]=placement.size;
        return reqObject;
    }


}

const amazonAdapter =new AmazonAdapter();
export default amazonAdapter;

