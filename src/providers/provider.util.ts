import {ResponseFormat} from '../../source/config/Type';

type configMap ={[key:string]:any;};

const imageUrl={
    "AMZP002":"https://www.google.com/search?q=amazon+images&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjKj-b4vqjnAhUK6XMBHZWUB0UQ_AUoAXoECA0QAw&biw=2560&bih=1361&dpr=1#imgrc=J2B55OP0TunymM:",
    "APPNXP003":"https://www.google.com/search?q=appnexus&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjGvseqv6jnAhVM4zgGHbIfAlcQ_AUoA3oECBIQBQ&biw=2560&bih=1361#imgrc=WLhL8ODb0J4iDM:",
    "OPNXP004":"https://www.google.com/search?biw=2560&bih=1361&tbm=isch&sa=1&ei=NlAxXqfBD6WYmgf1iayIDw&q=openx&oq=openx&gs_l=img.3..0l6j0i131j0l3.1623.2389..2458...0.0..0.121.483.2j3......0....1..gws-wiz-img.......0i24j0i10i24.YPZHNNlvWLw&ved=0ahUKEwintL-xv6jnAhUljOYKHfUEC_EQ4dUDCAc&uact=5#imgrc=luBXRGMcSw_otM:"
}

const imagePath ={
    "AMZ002":"https://image.shutterstock.com/image-photo/honolulu-january-12-2017-amazon-260nw-655556107.jpg",
    "APPNXP003":"https://martechtoday.com/wp-content/uploads/2018/08/appnexus-logo-1920x1080_fz4jy8.jpg",
    "OPNXP004":"https://ox-prod.imgix.net/uploads/2016/11/clientLogo_OpenX.png?auto=compress",
}

const providerNames ={
    "AMZP002":"AMAZON.MNET_TEST_PROVIDER_CREATIVE",
    "APPNXP003":"APPNEXUS.MNET_TEST_PROVIDER_CREATIVE",
    "OPNXP004":"OPENX.MNET_TEST_PROVIDER_CREATIVE"
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


