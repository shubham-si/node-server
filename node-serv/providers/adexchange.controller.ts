import { Request, Response, response } from 'express';
import { Ajax } from '../services/Ajax';

const providerURL ={
    "RUBIC005":"http://localhost:3000/provider/rubicon",
    "PUBM006":"http://localhost:3000/provider/pubmatics",
    "SONOB007":"http://localhost:3000/provider/sonobi",
}

export  function getResponseStream(req: Request, res: Response) {

    res.header("Content-Type","text/event-stream");
    res.header("Cache-Control", "no-cache");
    res.header("Connection","keep-alive");
   // res.header("Keep-Alive","timeout=5 max=12")       
    
    let requestArray = req.query['reqString'].split("|");
    var defferedRequestsMap = {};
    let defferedRequestArray=[];

    requestArray.forEach(function (reqString) {
        getRequestFormat(reqString,defferedRequestsMap);
    });

    Object.keys(defferedRequestsMap).forEach(provider=>{
        defferedRequestArray.push(new Ajax(defferedRequestsMap[provider].url,defferedRequestsMap[provider].reqPayload,defferedRequestsMap[provider].method));
    });

    let counterReq=0;


    defferedRequestArray.forEach((ajaxReq:Ajax)=>{
        ajaxReq.callService().then((response)=>{


            counterReq++;
        
            if(counterReq==defferedRequestArray.length){

                    res.write("event:close\n");
                    res.write('id: -1'+'\n'+'data: '+JSON.stringify(response)+'\n\n');   

                    res.end();
            }else{
                res.write("event:message");
                res.write("\n")
                res.write("data: "+JSON.stringify(response)+"\n\n");
            }
        },(err)=>{
            counterReq++;
            if(counterReq==defferedRequestArray.length){
                res.write("event:close\n");
                res.write('id: -1'+'\n'+'data: '+JSON.stringify(response)+'\n\n');   
                res.end();
            }else{
                res.write('id: -1'+'\n'+'data: '+{"status":"NO"}+'\n\n');   
            }
        })
    })

}

function getRequestFormat(reqParamString:string,defferedRequestsMap:any){
    let split_reqParam_at = reqParamString.split("@");
    let adslotid =split_reqParam_at[0];
    reqParamString = split_reqParam_at[1];

    let reqParams= reqParamString.split("_");

    defferedRequestsMap[reqParams[0]] = defferedRequestsMap[reqParams[0]] || {"url":providerURL[reqParams[0]],"method":"POST","reqPayload":{}};

    defferedRequestsMap[reqParams[0]]["reqPayload"][adslotid] = defferedRequestsMap[reqParams[0]]["reqPayload"][adslotid] || {};
    let reqPayload = getRequest(reqParams);

    defferedRequestsMap[reqParams[0]]["reqPayload"][adslotid]= reqPayload;
}


function getRequest(reqParams:any[]){
    return {
        "id" : reqParams[0],
        "size":reqParams[1],
        "revshare":reqParams[2],
        "bidprice":reqParams[3],
        "epc":reqParams[4],
        "ecc":reqParams[5],
    }
}

