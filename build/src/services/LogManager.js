"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ajax_1 = require("./Ajax");
var LogManager = /** @class */ (function () {
    function LogManager() {
        console.log('logmanager');
    }
    LogManager.prototype.log = function (data, level) {
        if (level == LogManager.LEVEL_1) {
        }
        else if (level == LogManager.LEVEL_2) {
            this.logging(data);
        }
    };
    LogManager.prototype.logging = function (data) {
        debugger;
        //console.log(JSON.stringify(data));
        //console.log(data);
        var ajax = new Ajax_1.Ajax("http://localhost:8080/logging", data, "POST");
        ajax.callService().then(function (res) {
            console.log('res');
        }, function (rej) {
            console.log('logging error');
        });
    };
    LogManager.LEVEL_1 = 1; // -- AdapterManager (PlacementRepo)
    LogManager.LEVEL_2 = 2; // -- AuctionManager (Placement Responses)
    LogManager.LEVEL_INFO = 0;
    return LogManager;
}());
var Logger = new LogManager();
exports.default = Logger;
/*

"bidprice",
"adcode",
"providerid"
"revshare"
"size"
"ecc"
"epc"
"publisherid"

*/
