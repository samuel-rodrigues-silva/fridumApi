"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var ChatController_1 = __importDefault(require("../controllers/ChatController"));
var chatRouter = (0, express_1.Router)();
var chatController = new ChatController_1.default();
chatRouter.post('/', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        userId: celebrate_1.Joi.string().uuid().required(),
        followId: celebrate_1.Joi.string().uuid().required(),
        serviceId: celebrate_1.Joi.string().uuid().required()
    },
    _a)), chatController.create);
chatRouter.get('/:id', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), chatController.fetchById);
chatRouter.get('/:id/messages', (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), chatController.show);
chatRouter.delete('/:id', (0, celebrate_1.celebrate)((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), chatController.remove);
exports.default = chatRouter;
//# sourceMappingURL=Chat.routes.js.map