"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var AcademicFormationController_1 = __importDefault(require("../controllers/AcademicFormationController"));
var cors_1 = __importDefault(require("cors"));
var academicFormationRouter = (0, express_1.Router)();
var academicFormationController = new AcademicFormationController_1.default();
academicFormationRouter.post('/', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        profileId: celebrate_1.Joi.string().uuid().required(),
        title: celebrate_1.Joi.string().min(3).required(),
        description: celebrate_1.Joi.string().required(),
        image: celebrate_1.Joi.string(),
        conclusion_date: celebrate_1.Joi.string(),
        institution: celebrate_1.Joi.string(),
    },
    _a)), academicFormationController.create);
academicFormationRouter.options('/', (0, cors_1.default)());
academicFormationRouter.options('/:id', (0, cors_1.default)());
academicFormationRouter.put('/:id', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b[celebrate_1.Segments.BODY] = {
        title: celebrate_1.Joi.string().min(3),
        description: celebrate_1.Joi.string(),
        image: celebrate_1.Joi.string(),
        conclusion_date: celebrate_1.Joi.string(),
        institution: celebrate_1.Joi.string(),
    },
    _b)), academicFormationController.update);
academicFormationRouter.delete('/:id', (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), academicFormationController.remove);
exports.default = academicFormationRouter;
//# sourceMappingURL=academicFormation.routes.js.map