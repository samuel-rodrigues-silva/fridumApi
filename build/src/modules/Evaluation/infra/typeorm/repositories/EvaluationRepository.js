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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Evaluation_1 = require("./../entities/Evaluation");
var Service_1 = require("./../../../../Service/infra/typeorm/entities/Service");
var User_1 = require("./../../../../User/infra/typeorm/entities/User");
var EvaluationRepository = /** @class */ (function () {
    function EvaluationRepository() {
        this.ormRepository = (0, typeorm_1.getRepository)(Evaluation_1.Evaluation);
        this.serviceRepository = (0, typeorm_1.getRepository)(Service_1.Service);
        this.userRepository = (0, typeorm_1.getRepository)(User_1.User);
        this.followRepository = (0, typeorm_1.getRepository)(User_1.User);
    }
    EvaluationRepository.prototype.list = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepository.find({ where: { follow: id }, relations: ['user', 'user.profile', 'service'] })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EvaluationRepository.prototype.create = function (data, id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, follow, service, evaluation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({ where: { id: id } })];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.userRepository.findOne({ where: { id: data.followId } })];
                    case 2:
                        follow = _a.sent();
                        return [4 /*yield*/, this.serviceRepository.findOne({ where: { id: data.serviceId } })];
                    case 3:
                        service = _a.sent();
                        evaluation = this.ormRepository.create(data);
                        evaluation.service = service;
                        evaluation.user = user;
                        evaluation.follow = follow;
                        return [4 /*yield*/, this.ormRepository.save(evaluation)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, evaluation];
                }
            });
        });
    };
    EvaluationRepository.prototype.update = function (data, evaluationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getConnection)()
                            .createQueryBuilder()
                            .update(Evaluation_1.Evaluation)
                            .set(data)
                            .where("id = :id", { id: evaluationId })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EvaluationRepository.prototype.delete = function (evaluationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepository.delete(evaluationId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return EvaluationRepository;
}());
exports.default = EvaluationRepository;
//# sourceMappingURL=EvaluationRepository.js.map