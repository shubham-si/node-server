import {ResponseFormat} from '../../source/config/Type';

type configMap ={[key:string]:any;};

const providerNames ={
    "AMZP002":"AMAZON_CREATIVE",
    "APPNXP003":"APPNEXUS_CREATIVE",
    "OPNXP004":"OPENX_CREATIVE"
}


export function getResponse(reqBody:ResponseFormat){
    var sizes= reqBody.sizes.split(":");                                 // if multiple sizes

    var response={};
    var sizeMapProviderConfig :configMap={};
    
    sizes.forEach((size)=>{
        sizeMapProviderConfig[size]=
            {
                "bidPrice":getRandomInt(15),
                "adcode":getAdcode(size,reqBody.providerID)
            };
    })

    response[reqBody.epc]=[];
    
    Object.keys(sizeMapProviderConfig).forEach((size,index)=>{
        response[reqBody.epc].push({[size]:sizeMapProviderConfig[size]});
    });
    
    return response;
}

function getRandomInt(max:number) {
    return Math.floor(Math.random() * Math.floor(max));
}


function getAdcode(size:string,providerID:string):any{
    let sizePx=size.split(",");
    
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
            "<h3>" + providerNames[providerID] + "</h3>" +
            "</body>" +
            "</html>";
        return adcode;
}


