import Logger from "./LogManager";

type SizeMap ={ [size:string]:any};
type PlacementMap ={[slotid:number]:SizeMap};

export default class AuctionManager{
    
    public conductAuction(providersResponse:any):PlacementMap{
        
        let placementmap:PlacementMap={};
        let  auctionId =  Math.random().toString(36).substr(2, 5);

        providersResponse.map(response=> {                                              // [0,1,2]
           
            Object.keys(response).forEach((adslotid,resIndex)=>{                    // adslotid: [{123},{124}]

                let sizemap:SizeMap=placementmap[adslotid] || {};                        // {123:<PlacementProviderConfig_json>}
                let auction_placementID = auctionId+adslotid;


                sizemap[response[adslotid].size] = sizemap[response[adslotid].size] || [];

                response[adslotid]["auctionId"]=auctionId;
                response[adslotid]["auction_placementID"]=auction_placementID;

                response[adslotid]["sharedBid"]=0;
                response[adslotid]["adcode"]="";
                if(response[adslotid].status=="Valid Bid"){
                    response[adslotid]["sharedBid"]= this.getAuctionBidPrice(response[adslotid].bidPrice,response[adslotid].revshare);
                }

                this.insertOrdered(sizemap[response[adslotid].size],response[adslotid]);
                placementmap[adslotid]=sizemap;
            });
            
        });

        Logger.log(placementmap,2);
        return placementmap;
    }

    private getAuctionBidPrice(orgBidPrice:number,revshare:number):number{
            return orgBidPrice-orgBidPrice*revshare/10;
    }


    private insertOrdered(array:any[], elem:any) {
            let _array = array;
            let i = 0;
            while ( i < array.length && array[i].bidPrice > elem.bidPrice ) {i ++};
            _array.splice(i, 0, elem);
            return _array;
        }
}
