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
exports.Meeting = void 0;
var typeorm_1 = require("typeorm");
var Follow_1 = require("../../../../Follow/infra/typeorm/entities/Follow");
var Location_1 = require("../../../../Location/infra/typeorm/entities/Location");
var User_1 = require("../../../../User/infra/typeorm/entities/User");
var Meeting = /** @class */ (function () {
    function Meeting() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Meeting.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return User_1.User; }, function (user) { return user.id; }),
        __metadata("design:type", User_1.User)
    ], Meeting.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Follow_1.Follow; }, function (follow) { return follow.id; }),
        __metadata("design:type", Follow_1.Follow)
    ], Meeting.prototype, "follow_id", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Location_1.Location; }, function (location) { return location.id; }),
        __metadata("design:type", Location_1.Location)
    ], Meeting.prototype, "location_id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Meeting.prototype, "meeting_time", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Meeting.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Meeting.prototype, "updatedAt", void 0);
    Meeting = __decorate([
        typeorm_1.Entity('meeting')
    ], Meeting);
    return Meeting;
}());
exports.Meeting = Meeting;
//# sourceMappingURL=Meeting.js.map