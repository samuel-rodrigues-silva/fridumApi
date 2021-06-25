"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var AccomplishmentController_1 = __importDefault(require("../controllers/AccomplishmentController"));
var accomplishmentRoutes = express_1.Router();
var accomplishmentController = new AccomplishmentController_1.default();
accomplishmentRoutes.get('/', accomplishmentController.fetchAll);
accomplishmentRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        title: celebrate_1.Joi.string().min(3).required(),
        description: celebrate_1.Joi.string().required(),
        image: celebrate_1.Joi.string()
    },
    _a)), accomplishmentController.create);
exports.default = accomplishmentRoutes;
//# sourceMappingURL=accomplishments.routes.js.map