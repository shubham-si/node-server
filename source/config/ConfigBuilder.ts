import config from "./sources/config";
import { Placement } from "./models/Placement";
import {PlacementProviderConfigRepo, Repository,PlacementRepo} from '../contracts/servicecontracts/Repo'

import {PlacementProviderConfigMap,PlacementProviderConfig, PlacementsInfoMap} from './Type'

export const adSlotConfig = config.adslots;
export const providersConfig =config.providers;
export const providersMap = config.providersmap;

const placementRepo:PlacementRepo<number,Placement> = new PlacementRepo<number,Placement>(); 

(function(){
      Object.keys(adSlotConfig).forEach((key: string) => {
    
            let placementProvidersConfigMap: PlacementProviderConfigMap = providersMap[key]     // <providerId:string,PlacementProviderConfig>
            
            let placementProviderConfigRepo:Repository<number,PlacementProviderConfig> = new PlacementProviderConfigRepo<number,PlacementProviderConfig>();
      
            Object.keys(placementProvidersConfigMap).forEach((placementConfigDataKey:string)=>{
               placementProviderConfigRepo.add(placementProvidersConfigMap[placementConfigDataKey]);     //for each adslot its corrosponding providers config info
            });
      
            let placementInfMap:any =adSlotConfig[key]
            placementInfMap.providers=placementProviderConfigRepo
               
            placementRepo.add(new Placement(<PlacementsInfoMap>placementInfMap));
      });
})();

export default placementRepo;
