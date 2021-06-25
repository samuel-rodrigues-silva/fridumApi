"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var LocationController_1 = __importDefault(require("../controllers/LocationController"));
var locationRoutes = express_1.Router();
var locationController = new LocationController_1.default();
locationRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        longitute: celebrate_1.Joi.string().required(),
        latitude: celebrate_1.Joi.string().required(),
    },
    _a)), locationController.create);
exports.default = locationRoutes;
//# sourceMappingURL=Location.routes.js.map