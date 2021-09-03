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
var Profile_1 = require("../../../../Profile/infra/typeorm/entities/Profile");
var Post_1 = require("./../../../../Post/infra/typeorm/entities/Post");
var Service_1 = require("./../../../../Service/infra/typeorm/entities/Service");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], User.prototype, "birthDate", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', unique: true }),
        __metadata("design:type", String)
    ], User.prototype, "document", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], User.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], User.prototype, "state", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], User.prototype, "district", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], User.prototype, "street", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], User.prototype, "phNumber", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], User.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Profile_1.Profile; }, function (profile) { return profile.id; }, { cascade: true, onDelete: 'CASCADE' }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Profile_1.Profile)
    ], User.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Post_1.Post; }, function (Post) { return Post.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "post", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Service_1.Service; }),
        __metadata("design:type", Service_1.Service)
    ], User.prototype, "service", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)('user')
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map