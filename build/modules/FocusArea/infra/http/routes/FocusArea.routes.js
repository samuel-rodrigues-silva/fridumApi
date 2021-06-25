"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var FocusAreaController_1 = __importDefault(require("../controllers/FocusAreaController"));
var focusAreaRoutes = express_1.Router();
var focusAreaController = new FocusAreaController_1.default();
focusAreaRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        bussines: celebrate_1.Joi.string().required(),
    },
    _a)), focusAreaController.create);
exports.default = focusAreaRoutes;
//# sourceMappingURL=FocusArea.routes.js.map