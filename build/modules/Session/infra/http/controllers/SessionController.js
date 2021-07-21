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
var typeorm_1 = require("typeorm");
var Session_1 = require("../../typeorm/entities/Session");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var SessionController = /** @class */ (function () {
    function SessionController() {
    }
    SessionController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, repo, userExists, user, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        _a = request.body, email = _a.email, password = _a.password;
                        repo = typeorm_1.getRepository(Session_1.Session);
                        return [4 /*yield*/, repo.findOne({ where: { email: email } })];
                    case 1:
                        userExists = _b.sent();
                        if (!userExists) return [3 /*break*/, 2];
                        return [2 /*return*/, response.status(409)];
                    case 2:
                        user = repo.create({ email: email, password: password });
                        return [4 /*yield*/, repo.save(user)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, response.status(201).send(user)];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        return [2 /*return*/, response.send('ERROR:' + error_1.message)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SessionController.prototype.auth = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, repo, user, isPasswordValid, token, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = request.body, email = _a.email, password = _a.password;
                        repo = typeorm_1.getRepository(Session_1.Session);
                        return [4 /*yield*/, repo.findOne({ where: { email: email } })];
                    case 1:
                        user = _b.sent();
                        console.log(user);
                        if (!user) {
                            return [2 /*return*/, response.status(409).send('Email not found')];
                        }
                        return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
                    case 2:
                        isPasswordValid = _b.sent();
                        token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.ENCRYPT_HASH, { expiresIn: '16h' });
                        if (!isPasswordValid) {
                            return [2 /*return*/, response.status(409).send('Invalid password')];
                        }
                        return [2 /*return*/, response.status(201).send({
                                id: user.id,
                                email: user.email,
                                token: token
                            })];
                    case 3:
                        error_2 = _b.sent();
                        return [2 /*return*/, response.send('ERROR:' + error_2.message)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SessionController.prototype.fetchBy = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var repo, res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(request.params);
                        repo = typeorm_1.getRepository(Session_1.Session);
                        return [4 /*yield*/, repo.find(request.params)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, response.status(201).send(res)];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.send(error_3.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SessionController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                }
                catch (error) {
                    return [2 /*return*/, response.send(error.message)];
                    //console.log("errorMessage =>", error.message);
                }
                return [2 /*return*/];
            });
        });
    };
    SessionController.prototype.remove = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    response.status(201).send({ userId: request.userId });
                    // const repo = getRepository(Session);
                    // const res = await repo.delete(request.params.id)
                    // return response.status(201).send(res);
                }
                catch (error) {
                    return [2 /*return*/, response.send(error.message)];
                }
                return [2 /*return*/];
            });
        });
    };
    return SessionController;
}());
exports.default = SessionController;
//# sourceMappingURL=SessionController.js.map