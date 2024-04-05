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
exports.deleteUser = exports.update = exports.create = exports.findAll = void 0;
const facade_1 = __importDefault(require("./facade"));
const HttpStatusCode_1 = __importDefault(require("../../commons/constants/HttpStatusCode"));
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function findAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const User = yield facade_1.default.findAll();
            res.status(HttpStatusCode_1.default.OK).json(User);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.findAll = findAll;
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let user = Object.assign({}, req.body);
            yield facade_1.default.create(user);
            res.status(HttpStatusCode_1.default.OK).json("ok");
        }
        catch (error) {
            next(error);
        }
    });
}
exports.create = create;
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function update(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { query: { userId } = {} } = req;
            let user = Object.assign({}, req.body);
            yield facade_1.default.update(Number(userId), user);
            res.status(HttpStatusCode_1.default.OK).json("ok");
        }
        catch (error) {
            next(error);
        }
    });
}
exports.update = update;
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function deleteUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { query: { userId } = {} } = req;
            yield facade_1.default.deleteUser({ id: userId });
            res.status(HttpStatusCode_1.default.OK).json("ok");
        }
        catch (error) {
            next(error);
        }
    });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=index.js.map