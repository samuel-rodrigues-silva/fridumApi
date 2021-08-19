"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var ProfileController_1 = __importDefault(require("../controllers/ProfileController"));
var profileRoutes = express_1.Router();
var profileController = new ProfileController_1.default();
profileRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        work_resume: celebrate_1.Joi.string(),
        description: celebrate_1.Joi.string(),
        image: celebrate_1.Joi.string()
    },
    _a)), profileController.create);
profileRoutes.get('/:id', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), profileController.fetchBy);
exports.default = profileRoutes;
//# sourceMappingURL=Profile.routes.js.map