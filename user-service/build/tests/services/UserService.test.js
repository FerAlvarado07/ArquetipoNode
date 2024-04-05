"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = "test";
const chai_1 = require("chai");
const services_1 = require("../../src/services");
const database_1 = require("../../src/config/connection/database");
const User_model_1 = __importDefault(require("../../src/models/User.model"));
describe("UserService Test", () => {
    before("Init", () => __awaiter(void 0, void 0, void 0, function* () {
        yield database_1.db.sync({ force: true });
        User_model_1.default.create({
            id: 1,
            name: "test",
            createdAt: "2020-01-01",
            updatedAt: "2020-01-01",
        });
        User_model_1.default.create({
            id: 2,
            name: "test2",
            createdAt: "2020-01-01",
            updatedAt: "2020-01-01",
        });
    }));
    describe("FindAll", () => __awaiter(void 0, void 0, void 0, function* () {
        it("should return one user", () => __awaiter(void 0, void 0, void 0, function* () {
            const User = yield services_1.UserService.findAll();
            (0, chai_1.expect)(2).equal(User.length);
        }));
    }));
    describe("Update", () => __awaiter(void 0, void 0, void 0, function* () {
        it("should return one user", () => __awaiter(void 0, void 0, void 0, function* () {
            let user = {
                id: 0,
                name: "Fernando",
                email: "fernando.alvarado@axity.com",
            };
            let response = yield services_1.UserService.update(2, user);
            (0, chai_1.expect)(response[0]).equal(1);
        }));
    }));
    describe("Delete", () => __awaiter(void 0, void 0, void 0, function* () {
        it("should return one user", () => __awaiter(void 0, void 0, void 0, function* () {
            let response = yield services_1.UserService.deleteUser(1);
            (0, chai_1.expect)(response).equal(1);
        }));
    }));
});
//# sourceMappingURL=UserService.test.js.map