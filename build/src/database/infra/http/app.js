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
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/image/:img', function (req, res) {
    var img = req.params.img;
    console.log(img);
    res.sendFile(path_1.default.resolve(__dirname, '..', "uploads/" + img));
});
app.use(index_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map