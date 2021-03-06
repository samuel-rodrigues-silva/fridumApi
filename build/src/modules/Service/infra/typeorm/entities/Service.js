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
exports.Service = void 0;
var typeorm_1 = require("typeorm");
var Chat_1 = require("../../../../Chat/infra/typeorm/entities/Chat");
var Post_1 = require("../../../../Post/infra/typeorm/entities/Post");
var User_1 = require("../../../../User/infra/typeorm/entities/User");
var Service = /** @class */ (function () {
    function Service() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Service.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'enum', enum: ['contact', 'done', 'doing', 'pending', 'waitingDeal', 'refused'] }),
        __metadata("design:type", String)
    ], Service.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Service.prototype, "finishedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar' }),
        __metadata("design:type", String)
    ], Service.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar' }),
        __metadata("design:type", String)
    ], Service.prototype, "price", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'bool' }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "unread", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Service.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Service.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.service; }),
        __metadata("design:type", User_1.User)
    ], Service.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Post_1.Post; }, function (post) { return post.service; }),
        __metadata("design:type", Post_1.Post)
    ], Service.prototype, "post", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (follow) { return follow.service; }),
        __metadata("design:type", User_1.User)
    ], Service.prototype, "follow", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Chat_1.Chat; }, function (chat) { return chat.service; }),
        __metadata("design:type", Chat_1.Chat)
    ], Service.prototype, "chat", void 0);
    Service = __decorate([
        (0, typeorm_1.Entity)('service')
    ], Service);
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=Service.js.map