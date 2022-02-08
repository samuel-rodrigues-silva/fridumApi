"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f;
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
serviceRouter.get('/:id/follow', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), serviceController.fetchByFollowId);
serviceRouter.get('/:id/unread', (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), serviceController.fetchUnreadServices);
serviceRouter.post('/', (0, celebrate_1.celebrate)((_d = {},
    _d[celebrate_1.Segments.BODY] = {
        userId: celebrate_1.Joi.string().uuid().required(),
        postId: celebrate_1.Joi.string().uuid().allow(null),
        followId: celebrate_1.Joi.string().uuid().allow(null),
        status: celebrate_1.Joi.string().required(),
        finished_at: celebrate_1.Joi.string().allow(null),
        price: celebrate_1.Joi.string().allow(null),
        title: celebrate_1.Joi.string().allow(null)
    },
    _d)), serviceController.create);
serviceRouter.patch('/:id', (0, celebrate_1.celebrate)((_e = {},
    _e[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _e[celebrate_1.Segments.BODY] = {
        status: celebrate_1.Joi.string(),
        unread: celebrate_1.Joi.string().allow(null),
        finishedAt: celebrate_1.Joi.date(),
        price: celebrate_1.Joi.string(),
        title: celebrate_1.Joi.string()
    },
    _e)), serviceController.update);
serviceRouter.delete('/:id', (0, celebrate_1.celebrate)((_f = {},
    _f[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _f)), serviceController.remove);
exports.default = serviceRouter;
//# sourceMappingURL=Service.routes.js.map