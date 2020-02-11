import { Ajax } from "./Ajax";

class RequestService{

    private eventSource;
    constructor(){}

    public initiateRequest(requestPayload: any){
       
        this.eventSource = new EventSource(requestPayload.url+"?reqString="+requestPayload.reqString);
        
        this.eventSource.addEventListener('resp', this.onmessage);
        this.eventSource.addEventListener('close', this.onclose);
    }

    private onmessage(event ){
        console.log(event.data);
    }

    private onclose(event){
        console.log("closing");
        this.eventSource.close();
    }
}

let requestService =new RequestService();
export default requestService;