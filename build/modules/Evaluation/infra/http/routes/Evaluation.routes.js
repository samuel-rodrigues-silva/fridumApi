"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var EvaluationController_1 = __importDefault(require("../controllers/EvaluationController"));
var evaluationRouter = express_1.Router();
var evaluationController = new EvaluationController_1.default();
evaluationRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        service_id: celebrate_1.Joi.string().required(),
        description: celebrate_1.Joi.string().required(),
        rating: celebrate_1.Joi.number().required()
    },
    _a)), evaluationController.create);
evaluationRouter.get('/:id', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), evaluationController.fetchBy);
evaluationRouter.put('/:id', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), evaluationController.update);
evaluationRouter.delete('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), evaluationController.remove);
exports.default = evaluationRouter;
//# sourceMappingURL=Evaluation.routes.js.map