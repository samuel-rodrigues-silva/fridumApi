"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var ProfileController_1 = __importDefault(require("../controllers/ProfileController"));
var multer_1 = __importDefault(require("multer"));
var multer_2 = __importDefault(require("../../../../../../config/multer"));
var profileRoutes = (0, express_1.Router)();
var profileController = new ProfileController_1.default();
var upload = (0, multer_1.default)(multer_2.default);
profileRoutes.get('/', profileController.listAll);
profileRoutes.get('/:id', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _a)), profileController.fetchBy);
profileRoutes.patch('/:id', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid(),
    },
    _b[celebrate_1.Segments.BODY] = {
        role: celebrate_1.Joi.string(),
        description: celebrate_1.Joi.string(),
    },
    _b)), upload.fields([{ name: 'work_resume', maxCount: 1 }, { name: 'img', maxCount: 1 }, { name: 'video', maxCount: 1 }]), profileController.update);
exports.default = profileRoutes;
//# sourceMappingURL=Profile.routes.js.map