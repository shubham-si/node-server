"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./sources/config"));
var Placement_1 = require("./models/Placement");
var Repo_1 = require("../contracts/servicecontracts/Repo");
exports.adSlotConfig = config_1.default.adslots;
exports.providersConfig = config_1.default.providers;
exports.providersMap = config_1.default.providersmap;
var placementRepo = new Repo_1.PlacementRepo();
(function () {
    Object.keys(exports.adSlotConfig).forEach(function (key) {
        var placementProvidersConfigMap = exports.providersMap[key]; // <providerId:string,PlacementProviderConfig>
        var placementProviderConfigRepo = new Repo_1.PlacementProviderConfigRepo();
        Object.keys(placementProvidersConfigMap).forEach(function (placementConfigDataKey) {
            placementProviderConfigRepo.add(placementProvidersConfigMap[placementConfigDataKey]); //for each adslot its corrosponding providers config info
        });
        var placementInfMap = exports.adSlotConfig[key];
        placementInfMap.providers = placementProviderConfigRepo;
        placementRepo.add(new Placement_1.Placement(placementInfMap));
    });
})();
exports.default = placementRepo;
