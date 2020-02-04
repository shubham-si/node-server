"use strict";
//import { XMLHttpRequest} from 'xmlhttprequest-ts';
Object.defineProperty(exports, "__esModule", { value: true });
var Ajax = /** @class */ (function () {
    function Ajax(postUrl, postData, method) {
        this.method = method;
        this.url = postUrl;
        this.data = postData;
        this.objHttpReq = new XMLHttpRequest();
    }
    Ajax.prototype.callService = function () {
        var _this = this;
        var defer = new Deferred();
        this.objHttpReq.open(this.method, this.url);
        this.objHttpReq.onreadystatechange = function () { return _this.OnReadyStateChange(defer); };
        this.objHttpReq.ontimeout = function () { return _this.OnRequestTimeout(defer); };
        this.objHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        this.objHttpReq.setRequestHeader('Content-Type', 'application/json');
        this.objHttpReq.timeout = 2000;
        if (this.data == undefined) {
            this.objHttpReq.send();
        }
        else {
            this.objHttpReq.send(JSON.stringify(this.data));
        }
        return defer.promise;
    };
    Ajax.prototype.OnRequestTimeout = function (defer) {
        defer.resolve({ "timeout": this.data.providerID });
    };
    Ajax.prototype.OnReadyStateChange = function (defer) {
        if (this.objHttpReq.readyState == 4 && this.objHttpReq.status == 200) {
            this.responseText = this.objHttpReq.responseText;
            if (this.responseText.length == 0 || this.responseText == undefined)
                defer.resolve('undefined');
            else
                defer.resolve(JSON.parse(this.responseText));
        }
    };
    return Ajax;
}());
exports.Ajax = Ajax;
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this._promise = new Promise(function (resolve, reject) {
            _this._reject = reject;
            _this._resolve = resolve;
        });
    }
    Object.defineProperty(Deferred.prototype, "promise", {
        get: function () {
            return this._promise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deferred.prototype, "resolve", {
        get: function () {
            return this._resolve;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deferred.prototype, "reject", {
        get: function () {
            return this._reject;
        },
        enumerable: true,
        configurable: true
    });
    return Deferred;
}());
exports.Deferred = Deferred;
