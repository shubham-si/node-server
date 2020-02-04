"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Placement = /** @class */ (function () {
    function Placement(placementProperties) {
        this.properties = placementProperties;
    }
    Object.defineProperty(Placement.prototype, "id", {
        get: function () {
            return this.properties["id"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Placement.prototype, "size", {
        get: function () {
            return this.properties['size'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Placement.prototype, "adslotname", {
        get: function () {
            return this.properties['adslotname'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Placement.prototype, "providers", {
        get: function () {
            return this.properties['providers'];
        },
        enumerable: true,
        configurable: true
    });
    return Placement;
}());
exports.Placement = Placement;
/*

Two repos

1. Placement Repo > For each adslot id > properties: PlacementsInfoMap
2. Within this property > ProviderPlacementConfigsMap (repo)

*/ 
