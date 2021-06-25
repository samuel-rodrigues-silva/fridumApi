"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var OccupationController_1 = __importDefault(require("../controllers/OccupationController"));
var occupationRoutes = express_1.Router();
var occupationController = new OccupationController_1.default();
occupationRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        role: celebrate_1.Joi.string().required(),
        company: celebrate_1.Joi.string().required(),
        date_in: celebrate_1.Joi.number().required(),
        date_out: celebrate_1.Joi.number().required()
    },
    _a)), occupationController.create);
exports.default = occupationRoutes;
//# sourceMappingURL=Occupation.routes.js.map