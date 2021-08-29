"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var OccupationController_1 = __importDefault(require("../controllers/OccupationController"));
var occupationRouter = express_1.Router();
var occupationController = new OccupationController_1.default();
occupationRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        profileId: celebrate_1.Joi.string().uuid().required(),
        role: celebrate_1.Joi.string().required(),
        company: celebrate_1.Joi.string().required(),
        date_in: celebrate_1.Joi.string().required(),
        date_out: celebrate_1.Joi.string().required()
    },
    _a)), occupationController.create);
occupationRouter.patch('/:id', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), occupationController.update);
occupationRouter.delete('/:id', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), occupationController.remove);
exports.default = occupationRouter;
//# sourceMappingURL=Occupation.routes.js.map