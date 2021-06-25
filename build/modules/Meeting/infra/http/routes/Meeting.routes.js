"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var MeetingController_1 = __importDefault(require("../controllers/MeetingController"));
var meetingRoutes = express_1.Router();
var meetingController = new MeetingController_1.default();
meetingRoutes.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        user_id: celebrate_1.Joi.string().required(),
        follow_id: celebrate_1.Joi.string().required(),
        location_id: celebrate_1.Joi.string(),
        meeting_time: celebrate_1.Joi.number()
    },
    _a)), meetingController.create);
exports.default = meetingRoutes;
//# sourceMappingURL=Meeting.routes.js.map