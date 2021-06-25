"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var EvaluationController_1 = __importDefault(require("../controllers/EvaluationController"));
var evaluationRoutes = express_1.Router();
var evaluationController = new EvaluationController_1.default();
evaluationRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        service_id: celebrate_1.Joi.string().required(),
        description: celebrate_1.Joi.string().required(),
        rating: celebrate_1.Joi.number().required()
    },
    _a)), evaluationController.create);
exports.default = evaluationRoutes;
//# sourceMappingURL=Evaluation.routes.js.map