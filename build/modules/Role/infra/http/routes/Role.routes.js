"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var RoleController_1 = __importDefault(require("../controllers/RoleController"));
var roleRoutes = express_1.Router();
var roleController = new RoleController_1.default();
roleRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        title: celebrate_1.Joi.string().min(3).required(),
        description: celebrate_1.Joi.string().required(),
        image: celebrate_1.Joi.string()
    },
    _a)), roleController.create);
exports.default = roleRoutes;
//# sourceMappingURL=Role.routes.js.map