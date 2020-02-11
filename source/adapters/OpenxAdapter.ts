import {PlacementProviderConfig} from '../config/Type';
import { Placement } from "../config/models/Placement";

class OpenxAdapter{

    private reqMap;  //:ClientSideDSP;
    private _isAdExchange:boolean;


    constructor(){
        this.reqMap={};
        this.reqMap["url"]="http://localhost:3000/provider/openx";
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
        /*
        return{
            "placementProviderConfig":providerConfig,
            "url":"http://localhost:3000/provider/openx",
            "method":"POST",
            "size":placement.size,
        }*/
    }


}

const openxAdapter =new OpenxAdapter();
export default openxAdapter;

