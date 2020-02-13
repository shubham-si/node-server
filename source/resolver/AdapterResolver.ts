import AmazonAdapter from '../adapters/AmazonAdapter';
import AppnexusAdapter from '../adapters/AppnexusAdapter';
import OpenxAdapter from '../adapters/OpenxAdapter';
import AdExchange from '../adapters/AdExchange';
import {PlacementProviderConfig, ProviderConfig } from '../config/Type';
import { Placement } from '../config/models/Placement';
import { BidRequestAdapter } from '../contracts/servicecontracts/BidRequestAdapter';

export default class AdapterResolver{

    private adapterResolverMap : { [key:string]: BidRequestAdapter } = {
        "AmazonAdapter": AmazonAdapter,
        "AppnexusAdapter": AppnexusAdapter,
        "OpenxAdapter": OpenxAdapter,
         "AdExchange": AdExchange,
    };

    public getAdapterInstance(adapterName: string): BidRequestAdapter{
        return this.adapterResolverMap[adapterName];
    }
    
}
