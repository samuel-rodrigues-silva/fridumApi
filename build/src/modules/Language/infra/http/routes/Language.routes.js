"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var LanguageController_1 = __importDefault(require("../controllers/LanguageController"));
var languageRouter = (0, express_1.Router)();
var languageController = new LanguageController_1.default();
languageRouter.post('/', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        profileId: celebrate_1.Joi.string().uuid().required(),
        title: celebrate_1.Joi.string().required(),
        level: celebrate_1.Joi.string().required()
    },
    _a)), languageController.create);
languageRouter.put('/:id', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b[celebrate_1.Segments.BODY] = {
        title: celebrate_1.Joi.string().required(),
        level: celebrate_1.Joi.string().required()
    },
    _b)), languageController.update);
languageRouter.delete('/:id', (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), languageController.remove);
exports.default = languageRouter;
//# sourceMappingURL=Language.routes.js.map