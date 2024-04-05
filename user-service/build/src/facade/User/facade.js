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
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../services");
const error_1 = require("../../config/error");
/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let User = yield services_1.UserService.findAll();
            let userMap = [];
            User.forEach((v) => {
                userMap.push({ id: v.id, name: v.name, email: v.email });
            });
            return userMap;
        });
    },
    /**
     * @returns {Promise < void >}
     * @memberof UserFacade
     */
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield services_1.UserService.validate(user))) {
                throw new error_1.ParametersError("Name is required");
            }
            yield services_1.UserService.create(user);
        });
    },
    /**
     * @returns {Promise < void>}
     * @memberof UserFacade
     */
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield services_1.UserService.validate(user))) {
                throw new error_1.ParametersError("name is required");
            }
            let response = yield services_1.UserService.update(id, user);
            if (response[0] === 0) {
                throw new error_1.NotFoundError("user not found");
            }
            return response[0];
        });
    },
    deleteUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield services_1.UserService.validateDelete(user);
            let response = yield services_1.UserService.deleteUser(user.id);
            if (response === 0) {
                throw new error_1.NotFoundError("user not found");
            }
            return response;
        });
    },
};
exports.default = UserFacade;
//# sourceMappingURL=facade.js.map