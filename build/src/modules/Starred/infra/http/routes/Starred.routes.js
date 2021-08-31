"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var StarredController_1 = __importDefault(require("../controllers/StarredController"));
var starredRoutes = (0, express_1.Router)();
var starredController = new StarredController_1.default();
starredRoutes.post('/', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        userId: celebrate_1.Joi.string().uuid().required(),
        postId: celebrate_1.Joi.string().uuid().required(),
    },
    _a)), starredController.create);
starredRoutes.delete('/:id', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), starredController.remove);
exports.default = starredRoutes;
//# sourceMappingURL=Starred.routes.js.map