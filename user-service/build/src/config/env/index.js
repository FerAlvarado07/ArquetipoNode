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
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const NODE_ENV = process.env.NODE_ENV || 'local';
const local = {
    port: process.env.PORT || 9100,
    database: {
        DB_DIALECT: 'mysql',
        DB_NAME: process.env.DB_NAME || 'project',
        DB_USER: process.env.DB_USER || 'mysql',
        DB_PASSWORD: process.env.DB_PASSWORD || 'project123',
        DB_PORT: process.env.DB_PORT || '5432',
        DB_HOST: process.env.DB_HOST || 'localhost'
    },
    kafka: {
        CLIENT_ID: process.env.CLIENT_ID || 'test-app',
        GROUP_ID: process.env.GROUP_ID || 'test-app',
        BROKER: process.env.BROKER || 'localhost:9092'
    },
    elasticSearch: {
        HOST: process.env.ELASTIC_SEARCH_HOST || 'https://axity.es.us-east4.gcp.elastic-cloud.com:9243',
        USER: process.env.ELASTIC_SEARCH_USER || 'elastic',
        PASSWORD: process.env.ELASTIC_SEARCH_PASSWORD || 'XXXXXXXXXXXX',
    },
    secret: process.env.SECRET || '@QEGTUI',
    logger: {
        LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'info',
        INDEX_LOGGER: process.env.INDEX_LOGGER || 'User-service',
    }
};
const development = {
    port: process.env.PORT || 9100,
    database: {
        DB_DIALECT: 'mysql',
        DB_NAME: process.env.DB_NAME || 'project',
        DB_USER: process.env.DB_USER || 'mysql',
        DB_PASSWORD: process.env.DB_PASSWORD || 'project123',
        DB_PORT: process.env.DB_PORT || '5432',
        DB_HOST: process.env.DB_HOST || 'localhost'
    },
    kafka: {
        CLIENT_ID: process.env.CLIENT_ID || 'test-app',
        GROUP_ID: process.env.GROUP_ID || 'test-app',
        BROKER: process.env.BROKER || 'localhost:9092'
    },
    elasticSearch: {
        HOST: process.env.ELASTIC_SEARCH_HOST || 'https://axity.es.us-east4.gcp.elastic-cloud.com:9243',
        USER: process.env.ELASTIC_SEARCH_USER || 'elastic',
        PASSWORD: process.env.ELASTIC_SEARCH_PASSWORD || 'XXXXXXXXXXXX'
    },
    secret: process.env.SECRET || '@QEGTUI',
    logger: {
        LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'info',
        INDEX_LOGGER: process.env.INDEX_LOGGER || 'User-service',
    }
};
const production = {
    port: process.env.PORT || 9100,
    database: {
        DB_DIALECT: 'mysql',
        DB_NAME: process.env.DB_NAME || 'project',
        DB_USER: process.env.DB_USER || 'mysql',
        DB_PASSWORD: process.env.DB_PASSWORD || 'project123',
        DB_PORT: process.env.DB_PORT || '5432',
        DB_HOST: process.env.DB_HOST || 'localhost'
    },
    kafka: {
        CLIENT_ID: process.env.CLIENT_ID || 'test-app',
        GROUP_ID: process.env.GROUP_ID || 'test-app',
        BROKER: process.env.BROKER || 'localhost:9092'
    },
    elasticSearch: {
        HOST: process.env.ELASTIC_SEARCH_HOST || 'https://axity.es.us-east4.gcp.elastic-cloud.com:9243',
        USER: process.env.ELASTIC_SEARCH_USER || 'elastic',
        PASSWORD: process.env.ELASTIC_SEARCH_PASSWORD || 'XXXXXXXXXXXX'
    },
    secret: process.env.SECRET || '@QEGTUI',
    logger: {
        LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'info',
        INDEX_LOGGER: process.env.INDEX_LOGGER || 'User-service',
    }
};
const test = {
    port: process.env.PORT || 9100,
    database: {
        DB_DIALECT: 'sqlite',
        DB_STORAGE: process.env.DB_STORAGE || ':memory:'
    },
    kafka: {
        CLIENT_ID: process.env.CLIENT_ID || 'test-app',
        GROUP_ID: process.env.GROUP_ID || 'test-app',
        BROKER: process.env.BROKER || 'localhost:9092'
    },
    elasticSearch: {
        HOST: process.env.ELASTIC_SEARCH_HOST || 'https://axity.es.us-east4.gcp.elastic-cloud.com:9243',
        USER: process.env.ELASTIC_SEARCH_USER || 'elastic',
        PASSWORD: process.env.ELASTIC_SEARCH_PASSWORD || 'XXXXXXXXXXXX',
    },
    secret: process.env.SECRET || '@QEGTUI',
    logger: {
        LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'info',
        INDEX_LOGGER: process.env.INDEX_LOGGER || 'User-service',
    }
};
const config = {
    local,
    test,
    development,
    production
};
exports.default = config[NODE_ENV];
//# sourceMappingURL=index.js.map