"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var MeetingController_1 = __importDefault(require("../controllers/MeetingController"));
var meetingRouter = express_1.Router();
var meetingController = new MeetingController_1.default();
meetingRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        user_id: celebrate_1.Joi.string().required(),
        follow_id: celebrate_1.Joi.string().required(),
        location_id: celebrate_1.Joi.string(),
        meeting_time: celebrate_1.Joi.number()
    },
    _a)), meetingController.create);
meetingRouter.get('/:id', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _b)), meetingController.fetchBy);
meetingRouter.put('/:id', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _c)), meetingController.update);
meetingRouter.delete('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required()
    },
    _d)), meetingController.remove);
exports.default = meetingRouter;
//# sourceMappingURL=Meeting.routes.js.map