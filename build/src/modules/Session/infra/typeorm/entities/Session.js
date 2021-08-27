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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
var typeorm_1 = require("typeorm");
var class_transformer_1 = require("class-transformer");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var User_1 = require("../../../../User/infra/typeorm/entities/User");
var Session = /** @class */ (function () {
    function Session() {
    }
    Session.prototype.hashPassword = function () {
        this.password = bcryptjs_1.default.hashSync(this.password, 8);
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Session.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return User_1.User; }, function (user) { return user.id; }, { cascade: true, onDelete: 'CASCADE' }),
        typeorm_1.JoinColumn({ name: 'userId' }),
        __metadata("design:type", User_1.User)
    ], Session.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', unique: true }),
        __metadata("design:type", String)
    ], Session.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column("varchar"),
        class_transformer_1.Exclude(),
        __metadata("design:type", String)
    ], Session.prototype, "password", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        typeorm_1.BeforeUpdate(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Session.prototype, "hashPassword", null);
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp', name: 'created_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Session.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ type: 'timestamp', name: 'updated_At' }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Session.prototype, "updatedAt", void 0);
    Session = __decorate([
        typeorm_1.Entity('session')
    ], Session);
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=Session.js.map