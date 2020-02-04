"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var amazon_controller_1 = require("../../providers/amazon.controller");
var appnexus_controller_1 = require("../../providers/appnexus.controller");
var openx_controller_1 = require("../../providers/openx.controller");
var providerRouter = express_1.Router();
providerRouter.route('/amazon')
    .post(amazon_controller_1.sendResponseAmazon);
providerRouter.route('/appnexus')
    .post(appnexus_controller_1.sendResponseAppnexus);
providerRouter.route('/openx')
    .post(openx_controller_1.sendResponseOpenx);
exports.default = providerRouter;
