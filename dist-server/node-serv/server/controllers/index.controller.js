"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
function indexWelcome(req, res) {
    res.json('node server started');
}
exports.indexWelcome = indexWelcome;
var fs = __importStar(require("fs"));
var filePath = "/Users/shubham.si/Documents/node_server/build/bundle.js";
function getConfigs(req, res) {
    console.log(__dirname);
    // this will send bundled js file to publisher's request
    // new AdaptarManager().makeRequestToProviders(req.body).then(responses=>{
    //       let auctionResult = new AuctionManager().conductAuction(responses);
    //       Logger.log(auctionResult,2);
    //      // console.log(auctionResult);
    //       res.send(auctionResult);
    //    },err=>{
    //       err.send('OK error');
    //    });
    getBundleJsFile(req, res);
}
exports.getConfigs = getConfigs;
function getBundleJsFile(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200);
    res.header('Content-Type', 'application/javascript');
    fs.readFile(filePath, 'utf-8', function (err, bundlejs) {
        if (!err) {
            console.log('file read');
            res.send(bundlejs);
        }
        else {
            console.log(err);
        }
    });
}
