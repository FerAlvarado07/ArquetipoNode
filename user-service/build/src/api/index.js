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
exports.init = void 0;
const express = __importStar(require("express"));
const http = __importStar(require("http"));
const swaggerUi = __importStar(require("swagger-ui-express"));
const UserRouter_1 = __importDefault(require("./UserRouter"));
const cors_1 = __importDefault(require("cors"));
let swaggerDoc;
try {
    swaggerDoc = require("../../../swagger.json");
}
catch (error) {
    console.log("***************************************************");
    console.log("  Seems like you doesn`t have swagger.json file");
    console.log("  Please, run: ");
    console.log("  $ swagger-jsdoc -d swaggerDef.js ./src/api/*.ts ./src/to/*.ts -o swagger.json");
    console.log("***************************************************");
}
/**
 * @export
 * @param {express.Application} app
 */
function init(app) {
    const router = express.Router();
    /**
     *
     */
    app.use((0, cors_1.default)({
        optionsSuccessStatus: 200,
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    app.use("/users", UserRouter_1.default);
    /**
     * @description
     *  If swagger.json file exists in root folder, shows swagger api description
     *  else send commands, how to get swagger.json file
     * @constructs
     */
    if (swaggerDoc) {
        app.use("/docs", swaggerUi.serve);
        app.get("/docs", swaggerUi.setup(swaggerDoc));
    }
    else {
        app.get("/docs", (req, res) => {
            res.send("<p>Seems like you doesn't have <code>swagger.json</code> file.</p>" +
                "<p>For generate doc file use: <code>swagger-jsdoc -d swaggerDef.js ./src/api/*.ts ./src/to/*.ts -o swagger.json</code> in terminal</p>" +
                "<p>Then, restart your application</p>");
        });
    }
    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req, res, next) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });
    /**
     * @constructs all routes
     */
    app.use(router);
}
exports.init = init;
//# sourceMappingURL=index.js.map