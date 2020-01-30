import { PlacementsInfoMap } from "../Type";
import { scryptSync } from "crypto";

export class Placement {

    private properties: PlacementsInfoMap

    constructor(placementProperties: PlacementsInfoMap) {
        this.properties = placementProperties;
    }

    public get id() {
         return this.properties["id"];
    }

    public get size(){
        return this.properties['size'];
    }

    public get adslotname(){
        return this.properties['adslotname'];
    }

    public get providers(){
        return this.properties['providers'];
    }
}



/* 

Two repos

1. Placement Repo > For each adslot id > properties: PlacementsInfoMap
2. Within this property > ProviderPlacementConfigsMap (repo)

*/