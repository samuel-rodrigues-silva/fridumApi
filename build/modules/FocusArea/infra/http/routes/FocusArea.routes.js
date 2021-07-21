"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var FocusAreaController_1 = __importDefault(require("../controllers/FocusAreaController"));
var focusAreaRouter = express_1.Router();
var focusAreaController = new FocusAreaController_1.default();
focusAreaRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        bussines: celebrate_1.Joi.string().required(),
    },
    _a)), focusAreaController.create);
focusAreaRouter.get('/:id', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), focusAreaController.fetchBy);
focusAreaRouter.put('/:id', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), focusAreaController.update);
focusAreaRouter.delete('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), focusAreaController.remove);
exports.default = focusAreaRouter;
//# sourceMappingURL=FocusArea.routes.js.map