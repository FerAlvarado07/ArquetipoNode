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
exports.suscribe = exports.send = exports.init = void 0;
const kafkajs_1 = require("kafkajs");
const index_1 = __importDefault(require("../env/index"));
var producer;
var consumer;
/**
 * @export
 * @param {express.Application} app
 */
function init(topics) {
    return __awaiter(this, void 0, void 0, function* () {
        const kafka = new kafkajs_1.Kafka({
            clientId: index_1.default.kafka.CLIENT_ID,
            brokers: [index_1.default.kafka.BROKER],
        });
        const admin = kafka.admin();
        producer = kafka.producer();
        consumer = kafka.consumer({ groupId: index_1.default.kafka.GROUP_ID });
        yield producer.connect();
        yield consumer.connect();
        yield admin.connect();
        yield createTopics(admin, topics);
        return;
    });
}
exports.init = init;
function createTopics(admin, topics) {
    return __awaiter(this, void 0, void 0, function* () {
        let topicsConfig = topics.map(item => {
            return {
                topic: item,
                numPartitions: 1, // default: 1
                replicationFactor: 1, // default: 1
            };
        });
        yield admin.createTopics({
            topics: topicsConfig
        });
    });
}
/**
 * @export
 * @param {express.Application} app
 */
function send(topic, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        yield producer.send({
            topic: topic,
            messages: [
                { value: payload },
            ],
        });
    });
}
exports.send = send;
/**
* @export
* @param {express.Application} app
*/
function suscribe(topics, done) {
    return __awaiter(this, void 0, void 0, function* () {
        topics.forEach((topic) => __awaiter(this, void 0, void 0, function* () {
            yield consumer.subscribe({ topic: topic, fromBeginning: true });
        }));
        yield consumer.run({
            eachMessage: (_a) => __awaiter(this, [_a], void 0, function* ({ topic, partition, message }) {
                done(topic, partition, message);
            }),
        });
    });
}
exports.suscribe = suscribe;
//# sourceMappingURL=kafka.js.map