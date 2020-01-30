"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
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
        this.objHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        this.objHttpReq.setRequestHeader('Content-Type', 'application/json');
        if (this.data == undefined) {
            this.objHttpReq.send();
        }
        else {
            this.objHttpReq.send(JSON.stringify(this.data));
        }
        return defer.promise;
    };
    Ajax.prototype.OnReadyStateChange = function (defer) {
        if (this.objHttpReq.readyState == 4 && this.objHttpReq.status == 200) {
            this.responseText = this.objHttpReq.responseText;
            if (this.responseText.length == 0 || this.responseText == undefined)
                defer.resolve(undefined);
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
        this.promise = new Promise(function (resolve, reject) {
            _this.reject = reject;
            _this.resolve = resolve;
        });
    }
    return Deferred;
}());
exports.Deferred = Deferred;
