"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var AccomplishmentController_1 = __importDefault(require("../controllers/AccomplishmentController"));
var accomplishmentRouter = (0, express_1.Router)();
var accomplishmentController = new AccomplishmentController_1.default();
accomplishmentRouter.post('/', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        profileId: celebrate_1.Joi.string().uuid().required(),
        title: celebrate_1.Joi.string().min(3).required(),
        description: celebrate_1.Joi.string().required(),
        image: celebrate_1.Joi.string()
    },
    _a)), accomplishmentController.create);
accomplishmentRouter.put('/:id', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b[celebrate_1.Segments.BODY] = {
        profileId: celebrate_1.Joi.string().uuid().required(),
        title: celebrate_1.Joi.string().min(3),
        description: celebrate_1.Joi.string(),
        image: celebrate_1.Joi.string()
    },
    _b)), accomplishmentController.update);
accomplishmentRouter.delete('/:id', (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), accomplishmentController.remove);
exports.default = accomplishmentRouter;
//# sourceMappingURL=accomplishments.routes.js.map