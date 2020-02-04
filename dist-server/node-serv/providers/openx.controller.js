"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var provider_util_1 = require("./provider.util");
function sendResponseOpenx(req, res) {
    res.json(provider_util_1.getResponse(req.body));
}
exports.sendResponseOpenx = sendResponseOpenx;
