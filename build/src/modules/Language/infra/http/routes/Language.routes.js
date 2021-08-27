"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var LanguageController_1 = __importDefault(require("../controllers/LanguageController"));
var languageRouter = express_1.Router();
var languageController = new LanguageController_1.default();
languageRouter.get('/:id', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _a)), languageController.fetchBy);
languageRouter.post('/', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        title: celebrate_1.Joi.string().required(),
        description: celebrate_1.Joi.string().required()
    },
    _b)), languageController.create);
languageRouter.put('/:id', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), languageController.update);
languageRouter.delete('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), languageController.remove);
exports.default = languageRouter;
//# sourceMappingURL=Language.routes.js.map