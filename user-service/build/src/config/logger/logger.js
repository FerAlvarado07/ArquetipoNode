"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const { combine, timestamp, prettyPrint } = winston_1.format;
let winstonTransports = [new winston_1.transports.Console()];
exports.logger = (0, winston_1.createLogger)({
    transports: winstonTransports,
    level: `info`,
    format: combine(winston_1.format.splat(), winston_1.format.metadata(), prettyPrint(), timestamp(), winston_1.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] [user-service] -> ${level}: ${message}`;
    })),
});
//# sourceMappingURL=logger.js.map