"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var provider_util_1 = require("./provider.util");
function sendResponseAmazon(req, res) {
    res.json(provider_util_1.getResponse(req.body)); //{"Amazon":"$4"}
}
exports.sendResponseAmazon = sendResponseAmazon;
