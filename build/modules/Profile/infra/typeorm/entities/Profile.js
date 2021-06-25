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
exports.Profile = void 0;
var typeorm_1 = require("typeorm");
var Accomplishment_1 = require("../../../../Accomplishments/infra/typeorm/entities/Accomplishment");
var Occupation_1 = require("../../../../Occupation/infra/typeorm/entities/Occupation");
var FocusArea_1 = require("../../../../FocusArea/infra/typeorm/entities/FocusArea");
var Role_1 = require("../../../../Role/infra/typeorm/entities/Role");
var User_1 = require("../../../../User/infra/typeorm/entities/User");
var Profile = /** @class */ (function () {
    function Profile() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Profile.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return User_1.User; }, function (user) { return user.id; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", User_1.User)
    ], Profile.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Accomplishment_1.Accomplishment; }, function (accomplishment) { return accomplishment.id; }),
        __metadata("design:type", Array)
    ], Profile.prototype, "accomplishment", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Occupation_1.Occupation; }, function (occupation) { return occupation.id; }),
        __metadata("design:type", Array)
    ], Profile.prototype, "occupation", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return FocusArea_1.FocusArea; }, function (FocusArea) { return FocusArea.id; }),
        __metadata("design:type", Array)
    ], Profile.prototype, "FocusArea", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Role_1.Role; }, function (role) { return role.id; }),
        __metadata("design:type", Array)
    ], Profile.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], Profile.prototype, "work_resume", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], Profile.prototype, "image", void 0);
    __decorate([
        typeorm_1.Column('text'),
        __metadata("design:type", String)
    ], Profile.prototype, "description", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Profile.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Profile.prototype, "updatedAt", void 0);
    Profile = __decorate([
        typeorm_1.Entity('profile')
    ], Profile);
    return Profile;
}());
exports.Profile = Profile;
//# sourceMappingURL=Profile.js.map