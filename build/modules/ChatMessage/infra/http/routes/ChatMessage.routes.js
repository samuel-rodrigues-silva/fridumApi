"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var ChatMessageController_1 = __importDefault(require("../controllers/ChatMessageController"));
var chatMessageRoutes = express_1.Router();
var chatMessageController = new ChatMessageController_1.default();
chatMessageRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        chat_id: celebrate_1.Joi.string().required(),
        user_id: celebrate_1.Joi.string().required(),
        message: celebrate_1.Joi.string().required()
    },
    _a)), chatMessageController.create);
exports.default = chatMessageRoutes;
//# sourceMappingURL=ChatMessage.routes.js.map