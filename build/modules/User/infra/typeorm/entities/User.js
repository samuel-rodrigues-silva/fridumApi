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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var FocusArea_1 = require("../../../../FocusArea/infra/typeorm/entities/FocusArea");
var Occupation_1 = require("./../../../../Occupation/infra/typeorm/entities/Occupation");
var Accomplishment_1 = require("./../../../../Accomplishments/infra/typeorm/entities/Accomplishment");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], User.prototype, "birthDate", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', unique: true }),
        __metadata("design:type", String)
    ], User.prototype, "document", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], User.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], User.prototype, "district", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], User.prototype, "street", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], User.prototype, "phNumber", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], User.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return FocusArea_1.FocusArea; }, function (focusArea) { return focusArea.user; }, { cascade: true }),
        __metadata("design:type", Array)
    ], User.prototype, "focusArea", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Occupation_1.Occupation; }, function (occupation) { return occupation.user; }, { cascade: true }),
        __metadata("design:type", Array)
    ], User.prototype, "occupation", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Accomplishment_1.Accomplishment; }, function (accomplishment) { return accomplishment.user; }, { cascade: true }),
        __metadata("design:type", Array)
    ], User.prototype, "accomplishment", void 0);
    User = __decorate([
        typeorm_1.Entity('user')
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map