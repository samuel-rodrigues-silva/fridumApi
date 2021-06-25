"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var SessionController_1 = __importDefault(require("../controllers/SessionController"));
var sessionController = new SessionController_1.default();
var sessionRouter = express_1.Router();
sessionRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        email: celebrate_1.Joi.string().email().required(),
        password: celebrate_1.Joi.string().required()
    },
    _a)), sessionController.create);
exports.default = sessionRouter;
//# sourceMappingURL=session.routes.js.map