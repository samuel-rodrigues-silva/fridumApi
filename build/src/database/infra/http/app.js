"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
var corsOptions = {
    origin: '*',
};
app.use(cors_1.default(corsOptions));
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods: GET, POST, OPTIONS,PATCH");
    next();
});
app.use(express_1.default.json());
app.use(index_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map