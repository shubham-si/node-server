"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_controller_1 = require("../controllers/index.controller");
var indexRouter = express_1.Router();
indexRouter.route('/')
    .get(index_controller_1.indexWelcome);
indexRouter.route('/configs')
    .post(index_controller_1.getConfigs);
exports.default = indexRouter;
