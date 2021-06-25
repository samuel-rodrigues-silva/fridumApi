"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var ServiceController_1 = __importDefault(require("../controllers/ServiceController"));
var serviceRoutes = express_1.Router();
var serviceController = new ServiceController_1.default();
serviceRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        title: celebrate_1.Joi.string().min(3).required(),
        description: celebrate_1.Joi.string().required(),
        image: celebrate_1.Joi.string()
    },
    _a)), serviceController.create);
exports.default = serviceRoutes;
//# sourceMappingURL=Service.routes.js.map