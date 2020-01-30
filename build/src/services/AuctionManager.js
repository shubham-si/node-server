"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuctionManager = /** @class */ (function () {
    function AuctionManager() {
    }
    AuctionManager.prototype.conductAuction = function (providersResponse) {
        var placementmap = {};
        providersResponse.map(function (response) {
            Object.keys(response).forEach(function (adslotid, resIndex) {
                var sizemap = placementmap[adslotid] || {};
                response[adslotid].forEach(function (sizeSlot, sizeIndex) {
                    Object.keys(sizeSlot).forEach(function (size) {
                        sizemap[size] = sizemap[size] || [];
                        sizemap[size].push(sizeSlot[size]);
                    });
                });
                placementmap[adslotid] = sizemap;
            });
        });
        Object.keys(placementmap).forEach(function (placementId) {
            Object.keys(placementmap[placementId]).forEach(function (size) {
                var bidArray = placementmap[placementId][size];
                bidArray.sort(function (bidPrice_a, bidPrice_b) {
                    return -1 * (bidPrice_a.bidprice - bidPrice_b.bidprice);
                });
                placementmap[placementId][size] = bidArray;
            });
        });
        return placementmap;
    };
    return AuctionManager;
}());
exports.default = AuctionManager;
