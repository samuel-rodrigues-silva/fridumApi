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
exports.Starred = void 0;
var typeorm_1 = require("typeorm");
var Post_1 = require("../../../../Post/infra/typeorm/entities/Post");
var User_1 = require("../../../../User/infra/typeorm/entities/User");
var Starred = /** @class */ (function () {
    function Starred() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Starred.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return User_1.User; }, function (user) { return user.id; }),
        __metadata("design:type", User_1.User)
    ], Starred.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Post_1.Post; }, function (post) { return post.id; }),
        __metadata("design:type", Post_1.Post)
    ], Starred.prototype, "post_id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Starred.prototype, "createdAt", void 0);
    Starred = __decorate([
        typeorm_1.Entity('starred')
    ], Starred);
    return Starred;
}());
exports.Starred = Starred;
//# sourceMappingURL=Starred.js.map