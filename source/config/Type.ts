import {Repository} from "../contracts/servicecontracts/Repo"

// Provider
export interface ProviderConfig{
    id:string,
    providername:string,
    entrypoint:string,
}

export type ProviderConfigMap={
    [key:string]:ProviderConfig
}

// PlacementProvider
export interface PlacementProviderConfig{
    id:string,
    revshare:number,
    epc:number,
    bidprice:number,
    ecc:string,
    pubid:string,
}

export type PlacementProviderConfigMap = {
    [id: string]: PlacementProviderConfig,                              // {providerid: string <> placementproviderdetails}
}

type ProvidersMap ={
    [id: number]: PlacementProviderConfigMap,                           // adslotID <> PlacementProviderConfigMap
}

// Placement
export interface PlacementConfig{
    id:number,
    size:string,
    adslotname:string,
    providersid:string,
    pubid:string,
}

type PlacementConfigMap ={
    [key :string]: PlacementConfig,
}

export interface PlacementsInfoMap extends PlacementConfig {
    providers: Repository<number,PlacementProviderConfig>;               // adslotid : number <> [{providerid: string <> placementproviderdetails}]
}

export type InputConfig = {
    adslots: PlacementConfigMap,
    providers: ProviderConfigMap,
    providersmap: ProvidersMap,
}


//create a repo of placementconfig in placement class and this is wrapped with PlacementInfoMap...
// ie., PlacementProviderConfigMap repo with <K:string(providerId),V:PlacementConfig>


export interface ResponseFormat{
    bidFloorPrice:number,
    providerID:string,
    adPlacementID:number,
    epc:number,
    ecc:string,
    sizes:string,
}

