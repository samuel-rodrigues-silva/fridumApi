"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var app_1 = __importDefault(require("./app"));
require("reflect-metadata");
require("../../index");
app_1.default.listen(process.env.PORT || 8080, function () {
    console.log("SERVER ON");
});
//# sourceMappingURL=server.js.map