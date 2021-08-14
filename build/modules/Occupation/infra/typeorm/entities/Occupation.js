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
exports.Occupation = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("../../../../User/infra/typeorm/entities/User");
var Occupation = /** @class */ (function () {
    function Occupation() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Occupation.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }),
        typeorm_1.JoinColumn({ name: 'id' }),
        __metadata("design:type", User_1.User)
    ], Occupation.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], Occupation.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], Occupation.prototype, "company", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp' }),
        __metadata("design:type", Date)
    ], Occupation.prototype, "date_in", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp' }),
        __metadata("design:type", Date)
    ], Occupation.prototype, "date_out", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Occupation.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Occupation.prototype, "updatedAt", void 0);
    Occupation = __decorate([
        typeorm_1.Entity('occupation')
    ], Occupation);
    return Occupation;
}());
exports.Occupation = Occupation;
//# sourceMappingURL=Occupation.js.map