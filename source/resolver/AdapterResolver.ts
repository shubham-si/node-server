import AmazonAdapter from '../adapters/AmazonAdapter';
import AppnexusAdapter from '../adapters/AppnexusAdapter';
import OpenxAdapter from '../adapters/OpenxAdapter';
import AdExchange from '../adapters/AdExchange';
import {PlacementProviderConfig, ProviderConfig } from '../config/Type';
import { Placement } from '../config/models/Placement';

export default class AdapterResolver{

    private adapterResolverMap : { [key:string]:any } = {
        "AmazonAdapter":AmazonAdapter,
        "AppnexusAdapter": AppnexusAdapter,
        "OpenxAdapter": OpenxAdapter,
        "AdExchange":AdExchange,
    };

    public getInstanceAdapter(providerInf:ProviderConfig,placement:Placement, providerConfig: PlacementProviderConfig):any|string{
        let adapter= this.adapterResolverMap[providerInf.entrypoint];
        if(adapter.isAdExchange){
            return  adapter.getRequest(placement,providerConfig,providerInf.id);
        }else{
            return  adapter.getRequest(placement,providerConfig);
        }
    }
    
}
