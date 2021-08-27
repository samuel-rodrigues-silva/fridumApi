"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var ServiceController_1 = __importDefault(require("../controllers/ServiceController"));
var serviceRouter = express_1.Router();
var serviceController = new ServiceController_1.default();
serviceRouter.get('/:id', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _a)), serviceController.fetchBy);
serviceRouter.post('/', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        user_id: celebrate_1.Joi.string().uuid().required(),
        post_id: celebrate_1.Joi.string().uuid().required(),
        follow_id: celebrate_1.Joi.string().uuid().required(),
        status: celebrate_1.Joi.string().required(),
        finished_at: celebrate_1.Joi.number()
    },
    _b)), serviceController.create);
serviceRouter.put('/:id', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), serviceController.update);
serviceRouter.delete('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), serviceController.remove);
exports.default = serviceRouter;
//# sourceMappingURL=Service.routes.js.map