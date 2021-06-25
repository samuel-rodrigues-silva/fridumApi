"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var ProfileController_1 = __importDefault(require("../controllers/ProfileController"));
var profileRoutes = express_1.Router();
var profileController = new ProfileController_1.default();
profileRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        user_id: celebrate_1.Joi.string().required(),
        description: celebrate_1.Joi.string().required(),
        image: celebrate_1.Joi.string()
    },
    _a)), profileController.create);
exports.default = profileRoutes;
//# sourceMappingURL=Profile.routes.js.map