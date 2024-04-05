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
exports.validateDelete = exports.deleteUser = exports.update = exports.validate = exports.create = exports.findAll = void 0;
const service_1 = __importDefault(require("./service"));
/**
 * @export
 * @returns {Promise < any[] >}
 */
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield service_1.default.findAll();
    });
}
exports.findAll = findAll;
/**
 * @export
 * @returns {Promise < void >}
 */
function create(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield service_1.default.create(user);
    });
}
exports.create = create;
/**
 * @export
 * @returns {Promise < boolean >}
 */
function validate(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield service_1.default.validate(user);
    });
}
exports.validate = validate;
/**
 * @export
 * @returns {Promise <[number, User[]]>}
 */
function update(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield service_1.default.update(id, user);
    });
}
exports.update = update;
/**
 * @export
 * @returns {Promise <number>}
 */
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield service_1.default.deleteUser(id);
    });
}
exports.deleteUser = deleteUser;
/**
 * @export
 * @returns {Promise <number>}
 */
function validateDelete(user) {
    return __awaiter(this, void 0, void 0, function* () {
        yield service_1.default.validateDelete(user);
    });
}
exports.validateDelete = validateDelete;
//# sourceMappingURL=index.js.map