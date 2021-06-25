"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var userRoutes = express_1.Router();
var userController = new UserController_1.default();
userRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        title: celebrate_1.Joi.string().min(3).required(),
        description: celebrate_1.Joi.string().required(),
        image: celebrate_1.Joi.string()
    },
    _a)), userController.create);
exports.default = userRoutes;
//# sourceMappingURL=User.routes.js.map