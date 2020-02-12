import {ResponseFormat} from '../../source/config/Type';

type configMap ={[key:string]:any;};

const providerNames ={
    "AMZP002":"AMAZON_CREATIVE",
    "APPNXP003":"APPNEXUS_CREATIVE",
    "OPNXP004":"OPENX_CREATIVE",
    "RUBIC005":"RUBICON_CREATIVE",
    "PUBM006":"PUBMATICS",
    "SONOB007":"SONOBI"
}


export function getResponse(reqBody:any){

    //console.log(JSON.stringify(reqBody));

    let sizeMapProviderConfig :configMap={};

    Object.keys(reqBody).forEach((adslot)=>{
        let response=getResponseFormat(reqBody[adslot]);

        response['status']='No Bid';
        if(response.bidPrice!=0){
            response['status']='Valid Bid';
        }else{
            response.adcode='<EMPTY>';
        }

        sizeMapProviderConfig[adslot]=response;
    });

    return sizeMapProviderConfig;
}

function getResponseFormat(reqAdslotData):any{
    return {
        "bidPrice":getRandomInt(15),
        "adcode":getAdcode(reqAdslotData),
        "id":reqAdslotData.id,          
        "ecc":reqAdslotData.ecc,
        "epc":+reqAdslotData.epc,
        "size":reqAdslotData.size,
        "revshare":+reqAdslotData.revshare,
    }
}

function getRandomInt(max:number) {
    return Math.floor(Math.random() * Math.floor(max));
}


function getAdcode(reqAdslotData):any{
    let sizePx=reqAdslotData.size.split("*");
    
    let adcode =
    "<!DOCTYPE html>" +
            "<html>" +
            "<head>" +
            "</head>" +
            "<body>" +
            '<style type="text/css">' +
            "body { text-size-adjust:none; -webkit-text-size-adjust: none; }" +
            "*{margin:0;padding:0}" +
            "a{text-decoration:none;outline:none}" +
            "a:hover{cursor:pointer; text-indent: 0}" +
            "img{border:none}" +
            "ul li{list-style:none}" +
            '.clearfix:after{visibility: hidden;display:block;font-size: 0;content: " ";clear: both;height:0}' +
            "* html .clearfix{zoom:1} " +
            "*:first-child+html .clearfix{zoom:1} " +
            "h1, h2, h3, h4, h5, h6 {font-weight: normal}" +
            "body{background:#f4f4f4}" +
            // tslint:disable-next-line: max-line-length
            "h3{ font-family: arial; color: #000; font-size: 35px; text-align: center; height: " + sizePx[0] + "px; line-height: " + sizePx[1] + "px;}" +
            "</style>" +
            "<h3>" + providerNames[reqAdslotData.id] + "</h3>" +
            "</body>" +
            "</html>";
        return adcode;
}


