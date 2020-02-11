import { Ajax } from "./Ajax";


class RequestService{

    constructor(){
        
    }

    public async initiateRequest(requestPayload: any){
        let adExchangeReqAjax = new Ajax(requestPayload.url,requestPayload.reqString,requestPayload.method);
        let promiseRet = adExchangeReqAjax.callService();
        await promiseRet;
        
    }
}

let requestService =new RequestService();
export default requestService;