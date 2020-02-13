import { Placement } from "../../config/models/Placement";
import { ProviderConfig } from "../../config/Type";

export interface BidRequestAdapter{
    setRequest(placement: Placement, providerConfig: ProviderConfig);
    fireRequest():Promise<any>;
}