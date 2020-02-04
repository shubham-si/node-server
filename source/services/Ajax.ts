export class Ajax {
    private url: string;
    private data: any;
    private response: string;
    private objHttpReq:any;
    private responseText: string;

    constructor (postUrl: string, postData: any ,public method:string) {
        this.url = postUrl;
        this.data = postData;     
        this.objHttpReq = new XMLHttpRequest();     
    }        
    
    callService():Promise<any>{
        var defer =new Deferred();
        this.objHttpReq.open(this.method, this.url); 
 
        this.objHttpReq.onreadystatechange = ()=>this.OnReadyStateChange(defer);
        this.objHttpReq.ontimeout =()=> this.OnRequestTimeout(defer);
        this.objHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        this.objHttpReq.setRequestHeader('Content-Type', 'application/json');
        this.objHttpReq.timeout=2000;

        if(this.data==undefined){
            this.objHttpReq.send();
        }else{
            this.objHttpReq.send(JSON.stringify(this.data));
        }
         
        return defer.promise;
    }

    private OnRequestTimeout(defer:Deferred){
        defer.resolve({"timeout":this.data.providerID});
    }

    OnReadyStateChange(defer: Deferred){  

        if (this.objHttpReq.readyState==4 && this.objHttpReq.status==200)
                    
        {       this.responseText=this.objHttpReq.responseText;
                if(this.responseText.length==0 || this.responseText==undefined)
                    defer.resolve('undefined');
                else
                    defer.resolve(JSON.parse(this.responseText));
        }  

        
    }
       
}  

export class Deferred {
    private _promise:any;
    private _resolve:any;
    private _reject:any;

    constructor() {
      this._promise = new Promise((resolve, reject)=> {
        this._reject = reject
        this._resolve = resolve
      })
    }

    public get promise(){
        return this._promise;
    }

    public get resolve(){
        return this._resolve;
    }

    public get reject(){
        return this._reject;
    }
  }