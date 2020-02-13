import config from "./sources/config";
import { Placement } from "./models/Placement";
import {PlacementProviderConfigRepo, Repository,PlacementRepo,ProviderRepo} from '../contracts/servicecontracts/Repo'

import {PlacementProviderConfigMap,PlacementProviderConfig, PlacementsInfoMap,ProviderConfig} from './Type'

export const adSlotConfig = config.adslots;
export const providersConfig =config.providers;
export const providersMap = config.providersmap;

export const placementRepo:PlacementRepo<number,Placement> = new PlacementRepo<number,Placement>(); 
export const providerRepo:ProviderRepo<string,ProviderConfig> =new ProviderRepo<string,ProviderConfig>();

(function(){
      Object.keys(adSlotConfig).forEach((key: string) => {
    
            let placementProvidersConfigMap: PlacementProviderConfigMap = providersMap[key]     // <providerId:string,PlacementProviderConfig>
            
            let placementProviderConfigRepo:Repository<string,PlacementProviderConfig> = new PlacementProviderConfigRepo<string,PlacementProviderConfig>();
      
            Object.keys(placementProvidersConfigMap).forEach((placementConfigDataKey:string)=>{
               placementProviderConfigRepo.add(placementProvidersConfigMap[placementConfigDataKey]);     //for each adslot its corrosponding providers config info
            });
      
            let placementInfMap:any =adSlotConfig[key]
            placementInfMap.providers=placementProviderConfigRepo
               
            placementRepo.add(new Placement(<PlacementsInfoMap>placementInfMap));
      });

      Object.keys(providersConfig).forEach((providerKey: string) => {
            let providerConfig = providersConfig[providerKey];
            providerRepo.add(providerConfig);
      });
})();

