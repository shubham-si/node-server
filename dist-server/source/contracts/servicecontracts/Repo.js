"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlacementProviderConfigRepo = /** @class */ (function () {
    function PlacementProviderConfigRepo() {
        this.placementList = new Array();
    }
    PlacementProviderConfigRepo.prototype.add = function (config) {
        this.placementList.push(config);
        return this;
    };
    PlacementProviderConfigRepo.prototype.remove = function (config) {
        this.placementList.remove(config);
        return this;
    };
    PlacementProviderConfigRepo.prototype.find = function (id) {
        var config;
        if (typeof id === "number")
            config = this.placementList.filter(function (config) { +config.id == +id; });
        else if (typeof id === "string")
            config = this.placementList.filter(function (config) { config.id == id; });
        else
            return null;
        if (config.length == 0) {
            return null;
        }
        return config;
    };
    PlacementProviderConfigRepo.prototype.each = function (callbackForEach) {
        this.placementList.forEach(callbackForEach);
    };
    return PlacementProviderConfigRepo;
}());
exports.PlacementProviderConfigRepo = PlacementProviderConfigRepo;
var PlacementRepo = /** @class */ (function () {
    function PlacementRepo() {
        this.placementList = new Array();
    }
    PlacementRepo.prototype.add = function (config) {
        this.placementList.push(config);
        return this;
    };
    PlacementRepo.prototype.remove = function (config) {
        this.placementList.remove(config);
        return this;
    };
    PlacementRepo.prototype.find = function (id) {
        var config;
        if (typeof id === "number")
            config = this.placementList.filter(function (config) { +config.properties.id == +id; });
        else if (typeof id === "string")
            config = this.placementList.filter(function (config) { config.properties.id == id; });
        else
            return null;
        if (config.length == 0) {
            return null;
        }
        return config;
    };
    PlacementRepo.prototype.each = function (callbackForEach) {
        this.placementList.forEach(callbackForEach);
    };
    return PlacementRepo;
}());
exports.PlacementRepo = PlacementRepo;
