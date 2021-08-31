"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var CreatePostService_1 = __importDefault(require("./../../../services/CreatePostService"));
var class_transformer_1 = require("class-transformer");
var UpdatePostService_1 = __importDefault(require("./../../../services/UpdatePostService"));
var DeletePostService_1 = __importDefault(require("./../../../services/DeletePostService"));
var ListPostService_1 = __importDefault(require("./../../../services/ListPostService"));
var ShowPostService_1 = __importDefault(require("./../../../services/ShowPostService"));
var PostController = /** @class */ (function () {
    function PostController() {
    }
    PostController.prototype.listByCity = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var area, post, postList, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        area = request.params.area;
                        post = tsyringe_1.container.resolve(ListPostService_1.default);
                        return [4 /*yield*/, post.execute(area)];
                    case 1:
                        postList = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.classToClass)(postList))];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, response.status(401).send(err_1.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostController.prototype.fetchBy = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var post, res, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        post = tsyringe_1.container.resolve(ShowPostService_1.default);
                        return [4 /*yield*/, post.execute(request.body)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.classToClass)(res))];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, response.status(401).send(err_2.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var createPost, Post, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        createPost = tsyringe_1.container.resolve(CreatePostService_1.default);
                        return [4 /*yield*/, createPost.execute(request.body)];
                    case 1:
                        Post = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.classToClass)(Post))];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, response.status(401).send(err_3.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, repo, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        repo = tsyringe_1.container.resolve(UpdatePostService_1.default);
                        return [4 /*yield*/, repo.execute(request.body, id)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.send(error_1.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostController.prototype.remove = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, repo, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        repo = tsyringe_1.container.resolve(DeletePostService_1.default);
                        return [4 /*yield*/, repo.execute(id)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, response.json(res)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, response.send(error_2.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PostController;
}());
exports.default = PostController;
//# sourceMappingURL=PostController.js.map