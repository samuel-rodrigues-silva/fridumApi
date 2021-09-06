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
var typeorm_2 = require("typeorm");
var User_1 = require("../entities/User");
var Profile_1 = require("./../../../../Profile/infra/typeorm/entities/Profile");
var path_1 = __importDefault(require("path"));
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.userRepository = (0, typeorm_1.getRepository)(User_1.User);
        this.profileRepository = (0, typeorm_1.getRepository)(Profile_1.Profile);
    }
    UserRepository.prototype.listAll = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var user, parsedCity, parsedRole;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.find({
                            relations: [
                                'profile',
                                'profile.academicFormation',
                                'profile.accomplishment',
                                'profile.focusArea',
                                'profile.language',
                                'profile.occupation',
                            ]
                        })];
                    case 1:
                        user = _a.sent();
                        if (data.city) {
                            parsedCity = data.city.replace('_', ' ');
                        }
                        if (data.role) {
                            parsedRole = String(data.role).replace('_', ' ');
                            parsedRole = parsedRole.replace('_', ' ');
                        }
                        if (data.city && data.role) {
                            console.log("both: " + parsedCity + " and " + parsedRole);
                            return [2 /*return*/, user.filter(function (user) { return (user.city == parsedCity && user.profile.role == parsedRole); })];
                        }
                        else if (data.city) {
                            console.log('city');
                            return [2 /*return*/, user.filter(function (user) { return (user.city == parsedCity); })];
                        }
                        else {
                            console.log("role: " + parsedRole);
                            return [2 /*return*/, user.filter(function (user) { return (user.profile.role == parsedRole); })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            where: { id: id }, relations: [
                                'profile',
                                'profile.academicFormation',
                                'profile.accomplishment',
                                'profile.focusArea',
                                'profile.language',
                                'profile.occupation',
                            ]
                        })];
                    case 1:
                        user = _a.sent();
                        image = path_1.default.resolve(__dirname, '..', '..', '..', '..', '..', "uploads/" + user.profile.image);
                        console.log(image);
                        user.profile.image = image;
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserRepository.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var profile, pr, repo, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        profile = this.profileRepository.create({
                            role: '',
                            work_resume: '',
                            image: '',
                            description: '',
                            accomplishment: [],
                            focusArea: [],
                            occupation: []
                        });
                        return [4 /*yield*/, this.profileRepository.save(profile)];
                    case 1:
                        pr = _a.sent();
                        console.log(pr);
                        repo = this.userRepository.create(data);
                        repo.profile = pr;
                        return [4 /*yield*/, this.userRepository.save(repo)];
                    case 2:
                        resp = _a.sent();
                        return [2 /*return*/, resp];
                }
            });
        });
    };
    UserRepository.prototype.update = function (data, id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_2.getConnection)()
                            .createQueryBuilder()
                            .update(User_1.User)
                            .set(data)
                            .where("id = :id", { id: id })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.delete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UserRepository;
}());
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map