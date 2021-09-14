"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var MeetingController_1 = __importDefault(require("../controllers/MeetingController"));
var meetingRouter = (0, express_1.Router)();
var meetingController = new MeetingController_1.default();
meetingRouter.post('/', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _a[celebrate_1.Segments.BODY] = {
        followId: celebrate_1.Joi.string().required(),
        meeting_time: celebrate_1.Joi.number(),
        street: celebrate_1.Joi.string().required(),
        district: celebrate_1.Joi.string().required(),
        city: celebrate_1.Joi.string().required(),
        state: celebrate_1.Joi.string().required(),
    },
    _a)), meetingController.create);
meetingRouter.get('/:id', (0, celebrate_1.celebrate)((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), meetingController.list);
meetingRouter.put('/:id', (0, celebrate_1.celebrate)((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), meetingController.update);
meetingRouter.delete('/:id', (0, celebrate_1.celebrate)((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), meetingController.remove);
exports.default = meetingRouter;
//# sourceMappingURL=Meeting.routes.js.map