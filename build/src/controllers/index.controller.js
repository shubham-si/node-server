"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AdaptarManager_1 = __importDefault(require("../services/AdaptarManager"));
var AuctionManager_1 = __importDefault(require("../services/AuctionManager"));
function indexWelcome(req, res) {
    res.json('node server started');
}
exports.indexWelcome = indexWelcome;
function getConfigs(req, res) {
    new AdaptarManager_1.default().makeRequestToProviders(req.body).then(function (responses) {
        var auctionResult = new AuctionManager_1.default().conductAuction(responses);
        console.log(auctionResult);
        res.send(auctionResult);
    }, function (err) {
        err.send('OK error');
    });
}
exports.getConfigs = getConfigs;
