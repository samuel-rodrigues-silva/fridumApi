"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var PostController_1 = __importDefault(require("../controllers/PostController"));
var postRouter = express_1.Router();
var postController = new PostController_1.default();
postRouter.get('/city/:area', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        area: celebrate_1.Joi.string().min(10).required()
    },
    _a)), postController.listByCity);
postRouter.get('/:id', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), postController.fetchBy);
postRouter.post('/', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.BODY] = {
        userId: celebrate_1.Joi.string().uuid().required(),
        city: celebrate_1.Joi.string().required(),
        state: celebrate_1.Joi.string().required(),
        description: celebrate_1.Joi.string().required(),
        title: celebrate_1.Joi.string().required(),
        image: celebrate_1.Joi.string(),
        price: celebrate_1.Joi.number().required(),
        expected_date_of_delivery: celebrate_1.Joi.date()
    },
    _c)), postController.create);
postRouter.patch('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), postController.update);
postRouter.delete('/:id', celebrate_1.celebrate((_e = {},
    _e[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _e)), postController.remove);
exports.default = postRouter;
//# sourceMappingURL=Post.routes.js.map