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
const facade_1 = __importDefault(require("../../src/facade/User/facade"));
const database_1 = require("../../src/config/connection/database");
const User_model_1 = __importDefault(require("../../src/models/User.model"));
describe("UserFacade Test", () => {
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
    describe("FindAll", () => {
        it("should return one user", () => __awaiter(void 0, void 0, void 0, function* () {
            const User = yield facade_1.default.findAll();
            (0, chai_1.expect)(2).equal(User.length);
        }));
    });
    describe("Update", () => {
        it("should return one user", () => __awaiter(void 0, void 0, void 0, function* () {
            let user = {
                id: 0,
                name: "Fernando",
                email: "fernando.alvarado@axity.com",
            };
            let response = yield facade_1.default.update(1, user);
            (0, chai_1.expect)(response).equal(1);
        }));
    });
    describe("Update Not Found Error", () => {
        it("should return one user", () => __awaiter(void 0, void 0, void 0, function* () {
            let user = {
                id: 0,
                name: "Fernando",
                email: "fernando.alvarado@axity.com",
            };
            try {
                let response = yield facade_1.default.update(1, user);
            }
            catch (error) {
                console.log(error);
                (0, chai_1.expect)(error).equals(error);
            }
        }));
    });
    //Delete Parameters Error
    describe("Delete Parameters Error 1", () => {
        it("should return one user", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let response = yield facade_1.default.deleteUser({ id: "1" });
            }
            catch (error) {
                (0, chai_1.expect)(error).equal(error);
            }
        }));
    });
    //Delete Parameters Error 2
    describe("Delete Parameters Error 2", () => {
        it("should return one user", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let response = yield facade_1.default.deleteUser({});
            }
            catch (error) {
                (0, chai_1.expect)(error).equal(error);
            }
        }));
    });
    //Not Found error
    describe("Update Not Found Error", () => {
        it("should return one user", () => __awaiter(void 0, void 0, void 0, function* () {
            let user = {
                id: 0,
                name: "Fernando",
                email: "fernando.alvarado@axity.com",
            };
            try {
                let response = yield facade_1.default.deleteUser({ id: 30 });
            }
            catch (error) {
                console.log(error);
                (0, chai_1.expect)(error).equals(error);
            }
        }));
    });
    //Happy Path
    describe("Delete Happy Path", () => {
        it("should return one user", () => __awaiter(void 0, void 0, void 0, function* () {
            let response = yield facade_1.default.deleteUser({ id: 2 });
            (0, chai_1.expect)(response).equal(1);
        }));
    });
});
//# sourceMappingURL=UserFacade.test.js.map