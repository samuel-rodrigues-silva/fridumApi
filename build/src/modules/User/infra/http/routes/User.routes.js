"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var userRoutes = (0, express_1.Router)();
var userController = new UserController_1.default();
userRoutes.get('/', userController.listAll);
userRoutes.get('/:id', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _a)), userController.fetchBy);
userRoutes.post('/', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().min(3).required(),
        birthDate: celebrate_1.Joi.string().required(),
        document: celebrate_1.Joi.string().required(),
        city: celebrate_1.Joi.string().required(),
        state: celebrate_1.Joi.string().required(),
        district: celebrate_1.Joi.string().required(),
        street: celebrate_1.Joi.string().required(),
        phNumber: celebrate_1.Joi.string().required(),
    },
    _b)), userController.create);
userRoutes.patch('/:id', (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid(),
    },
    _c[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().min(3).required(),
        birthDate: celebrate_1.Joi.string().required(),
        document: celebrate_1.Joi.string().required(),
        city: celebrate_1.Joi.string().required(),
        district: celebrate_1.Joi.string().required(),
        street: celebrate_1.Joi.string().required(),
        state: celebrate_1.Joi.string().required(),
        phNumber: celebrate_1.Joi.string().required(),
    },
    _c)), userController.update);
userRoutes.delete('/:id', (0, celebrate_1.celebrate)((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), userController.remove);
exports.default = userRoutes;
//# sourceMappingURL=User.routes.js.map