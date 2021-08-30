"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var ChatController_1 = __importDefault(require("../controllers/ChatController"));
var chatRouter = express_1.Router();
var chatController = new ChatController_1.default();
chatRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        userId: celebrate_1.Joi.string().required(),
        followId: celebrate_1.Joi.string().required(),
    },
    _a)), chatController.create);
// chatRouter.get('/:id', celebrate({
//     [Segments.PARAMS]: {
//         id: Joi.string().uuid().required()
//     }
// }), chatController.fetchById)
chatRouter.delete('/:id', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), chatController.remove);
exports.default = chatRouter;
//# sourceMappingURL=Chat.routes.js.map