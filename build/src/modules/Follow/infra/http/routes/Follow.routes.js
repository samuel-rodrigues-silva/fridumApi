"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var FollowController_1 = __importDefault(require("../controllers/FollowController"));
var followRouter = express_1.Router();
var followController = new FollowController_1.default();
followRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        userId: celebrate_1.Joi.string().required(),
        followId: celebrate_1.Joi.string().required(),
    },
    _a)), followController.create);
followRouter.delete('/:id', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), followController.remove);
exports.default = followRouter;
//# sourceMappingURL=Follow.routes.js.map