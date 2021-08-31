"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var ServiceController_1 = __importDefault(require("../controllers/ServiceController"));
var serviceRouter = (0, express_1.Router)();
var serviceController = new ServiceController_1.default();
serviceRouter.get('/:id', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _a)), serviceController.fetchById);
serviceRouter.post('/', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        userId: celebrate_1.Joi.string().uuid().required(),
        postId: celebrate_1.Joi.string().uuid().allow(null),
        followId: celebrate_1.Joi.string().uuid().allow(null),
        status: celebrate_1.Joi.string().required(),
        finished_at: celebrate_1.Joi.string().allow(null)
    },
    _b)), serviceController.create);
serviceRouter.patch('/:id', (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), serviceController.update);
serviceRouter.delete('/:id', (0, celebrate_1.celebrate)((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), serviceController.remove);
exports.default = serviceRouter;
//# sourceMappingURL=Service.routes.js.map