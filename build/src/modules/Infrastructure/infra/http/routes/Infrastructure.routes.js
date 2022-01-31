"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var InfrastructureController_1 = __importDefault(require("../controllers/InfrastructureController"));
var infrastructureRouter = (0, express_1.Router)();
var infrastructureController = new InfrastructureController_1.default();
infrastructureRouter.post('/', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        profileId: celebrate_1.Joi.string().uuid().required(),
        role: celebrate_1.Joi.string().required(),
        company: celebrate_1.Joi.string().required(),
        date_in: celebrate_1.Joi.string().required(),
        date_out: celebrate_1.Joi.string().required()
    },
    _a)), infrastructureController.create);
infrastructureRouter.patch('/:id', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b[celebrate_1.Segments.BODY] = {
        role: celebrate_1.Joi.string(),
        company: celebrate_1.Joi.string(),
        date_in: celebrate_1.Joi.string(),
        date_out: celebrate_1.Joi.string()
    },
    _b)), infrastructureController.update);
infrastructureRouter.delete('/:id', (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), infrastructureController.remove);
exports.default = infrastructureRouter;
//# sourceMappingURL=Infrastructure.routes.js.map