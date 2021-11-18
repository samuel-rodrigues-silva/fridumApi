"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("./routes/index"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-PINGOTHER,X-Requested-With,content-type');
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     // res.setHeader('Access-Control-Allow-Credentials', true);
//     // Pass to next layer of middleware
//     next();
// });
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/image/:img', function (req, res) {
    var img = req.params.img;
    res.sendFile(path_1.default.resolve(__dirname, '../../../../', "uploads/" + img));
});
index_1.default.options('/academicformation', (0, cors_1.default)());
app.use(index_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map