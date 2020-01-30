var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

export class Ajax {
    url: string;
    data: string;
    response: string;
    objHttpReq:any;
    responseText: string;

    constructor (postUrl: string, postData: any ,public method:string) {
        this.url = postUrl;
        this.data = postData;     
        this.objHttpReq = new XMLHttpRequest();     
    }        
    
    callService():Promise<any>{
        var defer =new Deferred();
        this.objHttpReq.open(this.method, this.url); 
 
        this.objHttpReq.onreadystatechange = ()=>this.OnReadyStateChange(defer);
        this.objHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        this.objHttpReq.setRequestHeader('Content-Type', 'application/json');  

        if(this.data==undefined){
            this.objHttpReq.send();
        }else{
            this.objHttpReq.send(JSON.stringify(this.data));
        }
         
        return defer.promise;
    }

    OnReadyStateChange(defer: Deferred){  

        if (this.objHttpReq.readyState==4 && this.objHttpReq.status==200)
                    
        {       this.responseText=this.objHttpReq.responseText;
                if(this.responseText.length==0 || this.responseText==undefined)
                    defer.resolve(undefined);
                else
                    defer.resolve(JSON.parse(this.responseText));
        }  

        
    }
       
}  

export class Deferred {
    public promise:any;
    public resolve:any;
    public reject:any;

    constructor() {
      this.promise = new Promise((resolve, reject)=> {
        this.reject = reject
        this.resolve = resolve
      })
    }
  }