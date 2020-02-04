import { json } from "body-parser";

type SizeMap ={ [size:string]:any};
type PlacementMap ={[slotid:number]:SizeMap};

export default class AuctionManager{
    
    public conductAuction(providersResponse:any):PlacementMap{
        
        let placementmap:PlacementMap={};

        providersResponse.map(response=> {
            
            Object.keys(response).forEach((adslotid,resIndex)=>{                    // adslotid: [{},{}]

            let sizemap:SizeMap=placementmap[adslotid] || {};
                response[adslotid].forEach((sizeSlot:string,sizeIndex)=>{           // [{ '300,200': {adcode,bidprice} },{},{}]

                    Object.keys(sizeSlot).forEach((size:string)=>{                  // {'300,200': {adcode,bidprice}}
                        sizemap[size] = sizemap[size] || [];
                        sizemap[size].push(sizeSlot[size]);
                    })
                })
                placementmap[adslotid]=sizemap;
            });
            
        });

        Object.keys(placementmap).forEach((placementId)=>{
            Object.keys(placementmap[placementId]).forEach((size)=>{
                let bidArray=placementmap[placementId][size];
                bidArray.sort((bidPrice_a,bidPrice_b)=>{
                    return -1*(bidPrice_a.bidprice-bidPrice_b.bidprice);
                });
                placementmap[placementId][size]=bidArray;
            })
            
        })

        return placementmap;
    }
}
