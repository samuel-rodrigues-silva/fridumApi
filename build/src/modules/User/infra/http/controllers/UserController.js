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
var class_transformer_1 = require("class-transformer");
var tsyringe_1 = require("tsyringe");
var CreateUserService_1 = __importDefault(require("../../../services/CreateUserService"));
var ShowUserService_1 = __importDefault(require("../../../services/ShowUserService"));
var DeleteUserService_1 = __importDefault(require("./../../../services/DeleteUserService"));
var UpdateUserService_1 = __importDefault(require("./../../../services/UpdateUserService"));
var ListUserService_1 = __importDefault(require("./../../../services/ListUserService"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var repo, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        repo = tsyringe_1.container.resolve(CreateUserService_1.default);
                        return [4 /*yield*/, repo.execute(request.body)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.classToClass)(user))];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.send(error_1.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.listAll = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, city, role, repo, user, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.query, city = _a.city, role = _a.role;
                        repo = tsyringe_1.container.resolve(ListUserService_1.default);
                        return [4 /*yield*/, repo.execute({ city: city, role: role })];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.classToClass)(user))];
                    case 2:
                        error_2 = _b.sent();
                        return [2 /*return*/, response.send(error_2.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.fetchBy = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, repo, user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        repo = tsyringe_1.container.resolve(ShowUserService_1.default);
                        return [4 /*yield*/, repo.execute(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.classToClass)(user))];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.send(error_3.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, birthDate, document, city, district, street, state, phNumber, repo, user;
            return __generator(this, function (_b) {
                try {
                    id = request.params.id;
                    _a = request.body, name = _a.name, birthDate = _a.birthDate, document = _a.document, city = _a.city, district = _a.district, street = _a.street, state = _a.state, phNumber = _a.phNumber;
                    repo = tsyringe_1.container.resolve(UpdateUserService_1.default);
                    user = repo.execute({
                        name: name,
                        birthDate: birthDate,
                        document: document,
                        city: city,
                        district: district,
                        street: street,
                        state: state,
                        phNumber: phNumber
                    }, id);
                    return [2 /*return*/, response.json(user)];
                }
                catch (error) {
                    return [2 /*return*/, response.send(error.message)];
                    //console.log("errorMessage =>", error.message);
                }
                return [2 /*return*/];
            });
        });
    };
    UserController.prototype.remove = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, repo, res, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        repo = tsyringe_1.container.resolve(DeleteUserService_1.default);
                        return [4 /*yield*/, repo.execute(id)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, response.json(res)];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, response.send(error_4.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.default = UserController;
//# sourceMappingURL=UserController.js.map