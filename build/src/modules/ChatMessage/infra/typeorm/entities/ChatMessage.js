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
exports.ChatMessage = void 0;
var typeorm_1 = require("typeorm");
var Chat_1 = require("../../../../Chat/infra/typeorm/entities/Chat");
var User_1 = require("../../../../User/infra/typeorm/entities/User");
var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], ChatMessage.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Chat_1.Chat; }, function (chat) { return chat.chatMessage; }),
        __metadata("design:type", Chat_1.Chat)
    ], ChatMessage.prototype, "chat", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.id; }),
        __metadata("design:type", User_1.User)
    ], ChatMessage.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.Column)('text'),
        __metadata("design:type", String)
    ], ChatMessage.prototype, "message", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'bool' }),
        __metadata("design:type", Boolean)
    ], ChatMessage.prototype, "unread", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], ChatMessage.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], ChatMessage.prototype, "updatedAt", void 0);
    ChatMessage = __decorate([
        (0, typeorm_1.Entity)('chatmessage')
    ], ChatMessage);
    return ChatMessage;
}());
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=ChatMessage.js.map