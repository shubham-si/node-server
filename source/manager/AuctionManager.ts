import { response } from "express";

type SizeMap ={ [size:string]:any};
type PlacementMap ={[slotid:number]:SizeMap};

export default class AuctionManager{
    
    public conductAuction(providersResponse:any):PlacementMap{
        
        let placementmap:PlacementMap={};
        console.log(providersResponse);

        providersResponse.map(response=> {                                              // [0,1,2]
           
            Object.keys(response).forEach((adslotid,resIndex)=>{                    // adslotid: [{123},{124}]

                let sizemap:SizeMap=placementmap[adslotid] || {};                        // {123:<PlacementProviderConfig_json>}
                sizemap[response[adslotid].size] = sizemap[response[adslotid].size] || [];
                this.insertOrdered(sizemap[response[adslotid].size],response[adslotid]);
                placementmap[adslotid]=sizemap;
            });
            
        });
        console.log(JSON.stringify(placementmap));
        return placementmap;
    }


    private insertOrdered(array:any[], elem:any) {
            let _array = array;
            let i = 0;
            while ( i < array.length && array[i].bidPrice > elem.bidPrice ) {i ++};
            _array.splice(i, 0, elem);
            return _array;
        }
}
