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
exports.AcademicFormation = void 0;
var typeorm_1 = require("typeorm");
var Profile_1 = require("../../../../Profile/infra/typeorm/entities/Profile");
var AcademicFormation = /** @class */ (function () {
    function AcademicFormation() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], AcademicFormation.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], AcademicFormation.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)('text'),
        __metadata("design:type", String)
    ], AcademicFormation.prototype, "institution", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], AcademicFormation.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], AcademicFormation.prototype, "image", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
        __metadata("design:type", String)
    ], AcademicFormation.prototype, "conclusion_date", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], AcademicFormation.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], AcademicFormation.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Profile_1.Profile; }, function (profile) { return profile.accomplishment; }),
        __metadata("design:type", Profile_1.Profile)
    ], AcademicFormation.prototype, "profile", void 0);
    AcademicFormation = __decorate([
        (0, typeorm_1.Entity)('academicformation')
    ], AcademicFormation);
    return AcademicFormation;
}());
exports.AcademicFormation = AcademicFormation;
//# sourceMappingURL=AcademicFormation.js.map