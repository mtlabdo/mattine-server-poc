"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const logging_1 = __importDefault(require("../config/logging"));
const configDotenv = {
    path: path_1.default.join(__dirname, "../.env"),
};
dotenv_1.default.config(configDotenv);
const logging_namespace = "database";
const Connection = require("tedious").Connection;
const config = {
    server: process.env.SBQ_HOST,
    authentication: {
        type: "default",
        options: {
            userName: process.env.USER_SQL,
            password: process.env.PASSWORD_SQL, //update me
        },
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: false,
        database: process.env.SQL_DATABASE,
        rowCollectionOnRequestCompletion: true,
    },
};
exports.connection = new Connection(config);
exports.connection.connect();
exports.connection.on("connect", function (err) {
    if (err) {
        logging_1.default.error(logging_namespace, "error on connecting to database", err);
    }
    else {
        logging_1.default.info(logging_namespace, "database connected with success");
    }
});
//# sourceMappingURL=connect.js.map