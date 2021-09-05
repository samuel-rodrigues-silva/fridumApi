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
var typeorm_1 = require("typeorm");
var Session_1 = require("../../typeorm/entities/Session");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var CreateSessionService_1 = __importDefault(require("../../../services/CreateSessionService"));
var DeleteSessionService_1 = __importDefault(require("./../../../services/DeleteSessionService"));
var UpdateSessionService_1 = __importDefault(require("./../../../services/UpdateSessionService"));
var class_transformer_1 = require("class-transformer");
var path_1 = __importDefault(require("path"));
var SessionController = /** @class */ (function () {
    function SessionController() {
    }
    SessionController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, userId, repo, userExists, session, resp, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        _a = request.body, email = _a.email, password = _a.password, userId = _a.userId;
                        repo = (0, typeorm_1.getRepository)(Session_1.Session);
                        return [4 /*yield*/, repo.findOne({ where: { email: email } })];
                    case 1:
                        userExists = _b.sent();
                        if (!userExists) return [3 /*break*/, 2];
                        return [2 /*return*/, response.status(409).send("Email already exists")];
                    case 2:
                        session = tsyringe_1.container.resolve(CreateSessionService_1.default);
                        return [4 /*yield*/, session.execute({ email: email, password: password, userId: userId })];
                    case 3:
                        resp = _b.sent();
                        return [2 /*return*/, response.status(201).json(resp)];
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
            var _a, email, password, repo, session, isPasswordValid, token, image, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = request.body, email = _a.email, password = _a.password;
                        repo = (0, typeorm_1.getRepository)(Session_1.Session);
                        return [4 /*yield*/, repo.findOne({
                                where: { email: email }, relations: [
                                    'user',
                                    'user.profile',
                                    'user.profile.academicFormation',
                                    'user.profile.accomplishment',
                                    'user.profile.occupation',
                                    'user.profile.language',
                                    'user.profile.focusArea',
                                ]
                            })];
                    case 1:
                        session = _b.sent();
                        if (!session) {
                            return [2 /*return*/, response.status(409).send('Email not found')];
                        }
                        return [4 /*yield*/, bcryptjs_1.default.compare(password, session.password)];
                    case 2:
                        isPasswordValid = _b.sent();
                        token = jsonwebtoken_1.default.sign({ id: session.id }, process.env.ENCRYPT_HASH, { expiresIn: '16h' });
                        if (!isPasswordValid) {
                            return [2 /*return*/, response.status(409).send('Invalid password')];
                        }
                        image = path_1.default.resolve(__dirname, '..', '..', '..', '..', '..', "uploads/" + session.user.profile.image);
                        session.user.profile.image = image;
                        console.log({
                            id: session.id,
                            email: session.email,
                            token: token,
                            user: session.user,
                            profile: session.user.profile
                        });
                        return [2 /*return*/, response.status(200).send({
                                id: session.id,
                                email: session.email,
                                token: token,
                                user: session.user,
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
            var id, repo, res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        repo = (0, typeorm_1.getRepository)(Session_1.Session);
                        return [4 /*yield*/, repo.findOne({ where: { id: id }, relations: ['user'] })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, response.status(201).send(res)];
                    case 2:
                        error_3 = _a.sent();
                        console.log("errorMessage =>", error_3.message);
                        return [2 /*return*/, response.send(error_3.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SessionController.prototype.fetchByEmail = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var email, repo, res, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        email = request.body.email;
                        console.log(email);
                        repo = (0, typeorm_1.getRepository)(Session_1.Session);
                        return [4 /*yield*/, repo.findOne({ where: { email: email } })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.classToClass)(res))];
                    case 2:
                        error_4 = _a.sent();
                        console.log("errorMessage =>", error_4.message);
                        return [2 /*return*/, response.send(error_4.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SessionController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, email, password, repo, findSession, session, res, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        id = request.params.id;
                        _a = request.body, email = _a.email, password = _a.password;
                        repo = (0, typeorm_1.getRepository)(Session_1.Session);
                        return [4 /*yield*/, repo.findOne(id)];
                    case 1:
                        findSession = _b.sent();
                        if (!findSession) return [3 /*break*/, 3];
                        session = tsyringe_1.container.resolve(UpdateSessionService_1.default);
                        return [4 /*yield*/, session.execute({ email: email, password: password }, id)];
                    case 2:
                        res = _b.sent();
                        return [2 /*return*/, response.status(200).send(res)];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_5 = _b.sent();
                        return [2 /*return*/, response.send(error_5.message)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SessionController.prototype.remove = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, repo, res, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id = request.params.id;
                        repo = tsyringe_1.container.resolve(DeleteSessionService_1.default);
                        return [4 /*yield*/, repo.execute(id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, repo.execute(id)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, response.json(res)];
                    case 3:
                        error_6 = _a.sent();
                        return [2 /*return*/, response.send(error_6.message)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return SessionController;
}());
exports.default = SessionController;
//# sourceMappingURL=SessionController.js.map