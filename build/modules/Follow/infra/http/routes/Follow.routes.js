"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var FollowController_1 = __importDefault(require("../controllers/FollowController"));
var followRoutes = express_1.Router();
var followController = new FollowController_1.default();
followRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        user_id: celebrate_1.Joi.string().required(),
        follow_id: celebrate_1.Joi.string().required(),
    },
    _a)), followController.create);
exports.default = followRoutes;
//# sourceMappingURL=Follow.routes.js.map