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
exports.AcademicFomation = void 0;
var typeorm_1 = require("typeorm");
var Profile_1 = require("../../../../Profile/infra/typeorm/entities/Profile");
var AcademicFomation = /** @class */ (function () {
    function AcademicFomation() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], AcademicFomation.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], AcademicFomation.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column('text'),
        __metadata("design:type", String)
    ], AcademicFomation.prototype, "institution", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], AcademicFomation.prototype, "description", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp' }),
        __metadata("design:type", String)
    ], AcademicFomation.prototype, "conclusion_date", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], AcademicFomation.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], AcademicFomation.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Profile_1.Profile; }, function (profile) { return profile.accomplishment; }),
        __metadata("design:type", Profile_1.Profile)
    ], AcademicFomation.prototype, "profile", void 0);
    AcademicFomation = __decorate([
        typeorm_1.Entity('academicformation')
    ], AcademicFomation);
    return AcademicFomation;
}());
exports.AcademicFomation = AcademicFomation;
//# sourceMappingURL=AcademicFormation.js.map