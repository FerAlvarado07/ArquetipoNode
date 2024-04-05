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
exports.initErrorHandler = exports.configure = void 0;
const bodyParser = __importStar(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const HttpStatusCode_1 = __importDefault(require("../../commons/constants/HttpStatusCode"));
const ErrorTo_1 = require("../../to/ErrorTo");
const error_1 = require("../error");
//import { sendHttpErrorModule } from '../error/sendHttpError';
/**
 * @export
 * @param {express.Application} app
 */
function configure(app) {
    // express middleware
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    // parse Cookie header and populate req.cookies with an object keyed by the cookie names.
    app.use((0, cookie_parser_1.default)());
    // returns the compression middleware
    app.use((0, compression_1.default)());
    // helps you secure your Express apps by setting various HTTP headers
    app.use((0, helmet_1.default)());
    // providing a Connect/Express middleware that can be used to enable CORS with various options
    app.use((0, cors_1.default)());
    // cors
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,' +
            ' Content-Type, Accept,' +
            ' Authorization,' +
            ' Access-Control-Allow-Credentials');
        res.header('Access-Control-Allow-Credentials', 'true');
        next();
    });
}
exports.configure = configure;
/**
 * @export
 * @param {express.Application} app
 */
function initErrorHandler(app) {
    app.use((error, req, res, next) => {
        console.error(`[Error] - Message: [${error.message}]\nStack: [${error.stack || ''}]`);
        if (error instanceof error_1.ParametersError || error instanceof error_1.UnauthorizedError ||
            error instanceof error_1.ForbiddenError || error instanceof error_1.NotFoundError) {
            let errorTo = new ErrorTo_1.ErrorTo('0', error.status.toString(), error.message, '');
            res.status(error.status).send(errorTo);
        }
        else {
            let errorTo = new ErrorTo_1.ErrorTo('0', error.message, 'Ocurrió un error inesperado', '');
            res.status(HttpStatusCode_1.default.INTERNAL_SERVER_ERROR).send(errorTo);
        }
    });
}
exports.initErrorHandler = initErrorHandler;
//# sourceMappingURL=middleware.js.map