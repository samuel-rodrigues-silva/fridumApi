"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var StarredController_1 = __importDefault(require("../controllers/StarredController"));
var starredRoutes = express_1.Router();
var starredController = new StarredController_1.default();
starredRoutes.get('/:id', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _a)));
starredRoutes.post('/', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        user_id: celebrate_1.Joi.string().uuid().required(),
        post_id: celebrate_1.Joi.string().uuid().required(),
    },
    _b)), starredController.create);
starredRoutes.put('/:id', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), starredController.update);
starredRoutes.delete('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), starredController.remove);
exports.default = starredRoutes;
//# sourceMappingURL=Starred.routes.js.map