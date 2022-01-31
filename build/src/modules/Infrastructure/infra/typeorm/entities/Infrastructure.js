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
exports.Infrastructure = void 0;
var typeorm_1 = require("typeorm");
var Profile_1 = require("./../../../../Profile/infra/typeorm/entities/Profile");
var Infrastructure = /** @class */ (function () {
    function Infrastructure() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Infrastructure.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", Number)
    ], Infrastructure.prototype, "employees", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", Array)
    ], Infrastructure.prototype, "technologies", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", Array)
    ], Infrastructure.prototype, "tools", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", Boolean)
    ], Infrastructure.prototype, "workstation", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", Boolean)
    ], Infrastructure.prototype, "purchaseMaterials", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Infrastructure.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Infrastructure.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Profile_1.Profile; }, function (profile) { return profile.occupation; }, { cascade: true, onDelete: 'CASCADE' }),
        __metadata("design:type", Profile_1.Profile)
    ], Infrastructure.prototype, "profile", void 0);
    Infrastructure = __decorate([
        (0, typeorm_1.Entity)('infrastructure')
    ], Infrastructure);
    return Infrastructure;
}());
exports.Infrastructure = Infrastructure;
//# sourceMappingURL=Infrastructure.js.map