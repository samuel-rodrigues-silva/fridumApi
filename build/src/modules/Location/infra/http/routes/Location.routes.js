"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var LocationController_1 = __importDefault(require("../controllers/LocationController"));
var locationRouter = express_1.Router();
var locationController = new LocationController_1.default();
locationRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        longitute: celebrate_1.Joi.string().required(),
        latitude: celebrate_1.Joi.string().required(),
    },
    _a)), locationController.create);
locationRouter.get('/:id', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), locationController.fetchBy);
locationRouter.post('/', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.BODY] = {
        email: celebrate_1.Joi.string().email().required(),
        password: celebrate_1.Joi.string().required()
    },
    _c)), locationController.create);
locationRouter.put('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), locationController.update);
locationRouter.delete('/:id', celebrate_1.celebrate((_e = {},
    _e[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _e)), locationController.remove);
exports.default = locationRouter;
//# sourceMappingURL=Location.routes.js.map