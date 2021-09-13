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
exports.Chat = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("../../../../User/infra/typeorm/entities/User");
var Service_1 = require("./../../../../Service/infra/typeorm/entities/Service");
var ChatMessage_1 = require("./../../../../ChatMessage/infra/typeorm/entities/ChatMessage");
var Chat = /** @class */ (function () {
    function Chat() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Chat.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.id; }),
        __metadata("design:type", User_1.User)
    ], Chat.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (follow) { return follow.id; }),
        __metadata("design:type", User_1.User)
    ], Chat.prototype, "follow", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ChatMessage_1.ChatMessage; }, function (chatMessage) { return chatMessage.id; }, { cascade: true, onDelete: 'CASCADE' }),
        __metadata("design:type", Array)
    ], Chat.prototype, "chatMessage", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Service_1.Service; }, function (service) { return service.id; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Service_1.Service)
    ], Chat.prototype, "service", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Chat.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Chat.prototype, "updatedAt", void 0);
    Chat = __decorate([
        (0, typeorm_1.Entity)('chat')
    ], Chat);
    return Chat;
}());
exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map