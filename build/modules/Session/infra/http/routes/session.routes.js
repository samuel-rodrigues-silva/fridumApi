"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var SessionController_1 = __importDefault(require("../controllers/SessionController"));
var verifyAuth_1 = __importDefault(require("./../middlewares/verifyAuth"));
var sessionController = new SessionController_1.default();
var sessionRouter = express_1.Router();
sessionRouter.get('/:id', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _a)), verifyAuth_1.default, sessionController.fetchBy);
sessionRouter.post('/', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        email: celebrate_1.Joi.string().email().required(),
        password: celebrate_1.Joi.string().required(),
        user_id: celebrate_1.Joi.string().uuid().allow(null)
    },
    _b)), sessionController.create);
sessionRouter.post('/auth', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.BODY] = {
        email: celebrate_1.Joi.string().email().required(),
        password: celebrate_1.Joi.string().required()
    },
    _c)), sessionController.auth);
sessionRouter.patch('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d[celebrate_1.Segments.BODY] = {
        email: celebrate_1.Joi.string().email().required(),
        password: celebrate_1.Joi.string().required()
    },
    _d)), sessionController.update);
sessionRouter.delete('/:id', celebrate_1.celebrate((_e = {},
    _e[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _e)), verifyAuth_1.default, sessionController.remove);
exports.default = sessionRouter;
//# sourceMappingURL=session.routes.js.map