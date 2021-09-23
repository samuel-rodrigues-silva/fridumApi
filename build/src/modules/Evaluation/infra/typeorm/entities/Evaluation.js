"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evaluation = void 0;
var typeorm_1 = require("typeorm");
var Service_1 = require("../../../../Service/infra/typeorm/entities/Service");
var User_1 = require("./../../../../User/infra/typeorm/entities/User");
var Evaluation = /** @class */ (function () {
    function Evaluation() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Evaluation.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Service_1.Service; }, function (service) { return service.id; }, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }),
        __metadata("design:type", Service_1.Service)
    ], Evaluation.prototype, "service", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.evaluation; }),
        __metadata("design:type", User_1.User)
    ], Evaluation.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.evaluation; }),
        __metadata("design:type", User_1.User)
    ], Evaluation.prototype, "follow", void 0);
    __decorate([
        (0, typeorm_1.Column)('text'),
        __metadata("design:type", String)
    ], Evaluation.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)('int'),
        __metadata("design:type", Number)
    ], Evaluation.prototype, "rating", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Evaluation.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Evaluation.prototype, "updatedAt", void 0);
    Evaluation = __decorate([
        (0, typeorm_1.Entity)('evaluation')
    ], Evaluation);
    return Evaluation;
}());
exports.Evaluation = Evaluation;
//# sourceMappingURL=Evaluation.js.map