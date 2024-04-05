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
const express_1 = __importDefault(require("express"));
const Middleware = __importStar(require("../interceptors/middleware"));
const Routes = __importStar(require("../../api"));
const database_1 = require("../connection/database");
/**
 * @constant {express.Application}
 */
const app = (0, express_1.default)();
/**
 * @constructs express.Application Middleware
 */
//Middleware.configure(app);
/**
 * @constructs express.Application Routes
 */
Routes.init(app);
// initialize db
database_1.db.authenticate()
    .then(() => {
    console.log('Connected to Database');
    database_1.db.sync();
})
    .catch(err => console.error('Error connecting database', err));
// initialize Kafka
// let allTopics = [
//     'pruebas',
//     'test'
// ];
// let topicsToSubscribe = [
//     'pruebas',
//     'test'
// ];
// Kafka.init(allTopics).then(async() => {
//     await Kafka.suscribe(topicsToSubscribe, (topic: any, partition: any, message: any)=>{
//         console.log('Topic: ', topic, 'Partition: ',partition, 'Message: ',message?.value?.toString())
//     });
//     console.log('Connected to Kafka');
// })
// .catch(err => console.error('Error connecting kafka', err))
/**
 * @constructs express.Application Error Handler
 */
Middleware.initErrorHandler(app);
/**
 * sets port 9100 to default or unless otherwise specified in the environment
 */
app.set('port', process.env.PORT || 9100);
/**
 * sets secret to 'superSecret', otherwise specified in the environment
 */
app.set('secret', process.env.SECRET || 'superSecret');
/**
 * @exports {express.Application}
 */
exports.default = app;
//# sourceMappingURL=server.js.map