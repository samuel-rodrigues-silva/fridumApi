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
exports.Post = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("../../../../User/infra/typeorm/entities/User");
var Service_1 = require("./../../../../Service/infra/typeorm/entities/Service");
var Post = /** @class */ (function () {
    function Post() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Post.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('text'),
        __metadata("design:type", String)
    ], Post.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], Post.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], Post.prototype, "state", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], Post.prototype, "image", void 0);
    __decorate([
        (0, typeorm_1.Column)('double'),
        __metadata("design:type", typeorm_1.Double)
    ], Post.prototype, "price", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Post.prototype, "expected_date_of_delivery", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Post.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Post.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }),
        __metadata("design:type", User_1.User)
    ], Post.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Service_1.Service; }, function (service) { return service.user; }),
        __metadata("design:type", Service_1.Service)
    ], Post.prototype, "service", void 0);
    Post = __decorate([
        (0, typeorm_1.Entity)('post')
    ], Post);
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=Post.js.map