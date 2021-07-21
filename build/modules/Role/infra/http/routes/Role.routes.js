"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var RoleController_1 = __importDefault(require("../controllers/RoleController"));
var roleRouter = express_1.Router();
var roleController = new RoleController_1.default();
roleRouter.get('/:id', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _a)), roleController.fetchBy);
roleRouter.post('/', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        title: celebrate_1.Joi.string().required(),
        description: celebrate_1.Joi.string().required()
    },
    _b)), roleController.create);
roleRouter.put('/:id', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), roleController.update);
roleRouter.delete('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), roleController.remove);
exports.default = roleRouter;
//# sourceMappingURL=Role.routes.js.map