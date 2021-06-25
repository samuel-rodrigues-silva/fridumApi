"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var PostController_1 = __importDefault(require("../controllers/PostController"));
var postRoutes = express_1.Router();
var postController = new PostController_1.default();
postRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        user_id: celebrate_1.Joi.string().required(),
        description: celebrate_1.Joi.string().required(),
        title: celebrate_1.Joi.string().required(),
        image: celebrate_1.Joi.string(),
        price: celebrate_1.Joi.number().required(),
        expected_date_of_delivery: celebrate_1.Joi.number()
    },
    _a)), postController.create);
exports.default = postRoutes;
//# sourceMappingURL=Post.routes.js.map