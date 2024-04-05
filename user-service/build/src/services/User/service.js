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
const User_model_1 = __importDefault(require("../../models/User.model"));
const sequelize_1 = require("sequelize");
const error_1 = require("../../config/error");
/**
 * @export
 * @implements {IUserModelService}
 */
const UserService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // Para enviar un mensaje a kafka
            // await Kafka.send("test", 'Hello');
            return User_model_1.default.findAll();
        });
    },
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            // Para enviar un mensaje a kafka
            // await Kafka.send("test", 'Hello');
            let userModel = Object.assign({}, user);
            yield User_model_1.default.create(userModel);
        });
    },
    validate(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag = true;
            console.log(user.name);
            if (user.name === undefined) {
                flag = false;
            }
            return flag;
        });
    },
    update(id, userTO) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_model_1.default.update(userTO, {
                where: {
                    id: {
                        [sequelize_1.Op.eq]: id,
                    },
                },
            });
        });
    },
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_model_1.default.destroy({
                where: {
                    id: {
                        [sequelize_1.Op.eq]: id,
                    },
                },
            });
        });
    },
    validateDelete(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = user;
            if (!id) {
                throw new error_1.ParametersError("id is required");
            }
            if (isNaN(id)) {
                throw new error_1.ParametersError("id is number");
            }
        });
    },
};
exports.default = UserService;
//# sourceMappingURL=service.js.map