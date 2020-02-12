import { Ajax, Deferred } from "./Ajax";

class RequestService{

    private eventSource;
    private adExchangeResponse:any[];
    private _defer:Deferred;

    constructor(){}

    public initiateRequest(requestPayload: any):Promise<any[]>{
        
        this._defer= new Deferred();
        this.adExchangeResponse=[];

        this.eventSource = new EventSource(requestPayload.url+"?reqString="+requestPayload.reqString);

        this.eventSource.addEventListener('message', ()=>this.onmessage(event,this._defer,this.adExchangeResponse,this.eventSource));
        this.eventSource.addEventListener('close', ()=>this.onclose(event,this._defer,this.adExchangeResponse,this.eventSource));

        this.eventSource.addEventListener('error', ()=>this.onerror(event,this.eventSource));

        return this._defer.promise;
    }

    private onerror(event,_eventSource){
        _eventSource.close();
    }

    private onmessage(event,_defer,_adExchangeResponse,_eventSource){ 
            _adExchangeResponse.push(JSON.parse(event.data));
    }

    private onclose(_event,_defer,_adExchangeResponse,_eventSource){

        console.log(_event.lastEventId);
        if(_event.lastEventId=='-1'){
            
            _adExchangeResponse.push(JSON.parse(_event.data));
            _defer.resolve(_adExchangeResponse);
            _eventSource.close();
        }
    }
}

let requestService =new RequestService();
export default requestService;