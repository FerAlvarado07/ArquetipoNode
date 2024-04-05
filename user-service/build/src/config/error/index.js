"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.ParametersError = void 0;
const http = __importStar(require("http"));
const HttpStatusCode_1 = __importDefault(require("../../commons/constants/HttpStatusCode"));
/**
 * @export
 * @class ParametersError
 * @extends {Error}
 */
class ParametersError extends Error {
    /**
     * Creates an instance of HttpError.
     * @param {number} [status]
     * @param {string} [message]
     * @memberof ParametersError
     */
    constructor(message, status) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.status = status || HttpStatusCode_1.default.BAD_REQUEST;
        this.message = message || http.STATUS_CODES[this.status] || 'Error';
    }
}
exports.ParametersError = ParametersError;
/**
 * @export
 * @class UnauthorizedError
 * @extends {Error}
 */
class UnauthorizedError extends Error {
    /**
     * Creates an instance of HttpError.
     * @param {number} [status]
     * @param {string} [message]
     * @memberof ParametersError
     */
    constructor(message, status) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.status = status || HttpStatusCode_1.default.UNAUTHORIZED;
        this.message = message || http.STATUS_CODES[this.status] || 'Error';
    }
}
exports.UnauthorizedError = UnauthorizedError;
/**
 * @export
 * @class ForbiddenError
 * @extends {Error}
 */
class ForbiddenError extends Error {
    /**
     * Creates an instance of HttpError.
     * @param {number} [status]
     * @param {string} [message]
     * @memberof ParametersError
     */
    constructor(message, status) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.status = status || HttpStatusCode_1.default.FORBIDDEN;
        this.message = message || http.STATUS_CODES[this.status] || 'Error';
    }
}
exports.ForbiddenError = ForbiddenError;
/**
 * @export
 * @class NotFoundError
 * @extends {Error}
 */
class NotFoundError extends Error {
    /**
     * Creates an instance of HttpError.
     * @param {number} [status]
     * @param {string} [message]
     * @memberof ParametersError
     */
    constructor(message, status) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.status = status || HttpStatusCode_1.default.NOT_FOUND;
        this.message = message || http.STATUS_CODES[this.status] || 'Error';
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=index.js.map