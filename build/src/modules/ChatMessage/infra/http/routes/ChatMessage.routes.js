"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var ChatMessageController_1 = __importDefault(require("../controllers/ChatMessageController"));
var chatMessageRouter = (0, express_1.Router)();
var chatMessageController = new ChatMessageController_1.default();
chatMessageRouter.post('/:id', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required(),
    },
    _a[celebrate_1.Segments.BODY] = {
        userId: celebrate_1.Joi.string().uuid().required(),
        message: celebrate_1.Joi.string().required(),
        unread: celebrate_1.Joi.bool().allow(null),
    },
    _a)), chatMessageController.create);
chatMessageRouter.post('/unreadMessages', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        idList: celebrate_1.Joi.array().items(celebrate_1.Joi.string().uuid()),
    },
    _b)), chatMessageController.manageUnreadMessages);
chatMessageRouter.delete('/:id', (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), chatMessageController.remove);
exports.default = chatMessageRouter;
//# sourceMappingURL=ChatMessage.routes.js.map