"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var ChatMessageController_1 = __importDefault(require("../controllers/ChatMessageController"));
var chatMessageRouter = express_1.Router();
var chatMessageController = new ChatMessageController_1.default();
chatMessageRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        chat_id: celebrate_1.Joi.string().required(),
        user_id: celebrate_1.Joi.string().required(),
        message: celebrate_1.Joi.string().required()
    },
    _a)), chatMessageController.create);
chatMessageRouter.get('/:id', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), chatMessageController.fetchBy);
chatMessageRouter.put('/:id', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), chatMessageController.update);
chatMessageRouter.delete('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), chatMessageController.remove);
exports.default = chatMessageRouter;
//# sourceMappingURL=ChatMessage.routes.js.map