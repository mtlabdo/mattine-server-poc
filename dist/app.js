"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const logging_1 = __importDefault(require("./config/logging"));
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const NAMESPACE = "Server";
const router = (0, express_1.default)();
router.use((req, res, next) => {
    logging_1.default.info(NAMESPACE, ` REQUEST --  [${req.method}] ~ ${req.url}, ~ [${req.socket.remoteAddress}]`);
    res.on("finish -- ", () => {
        logging_1.default.info(NAMESPACE, `RESPONSE -- [${req.method}] ~ ${req.url}], ~ [${req.socket.remoteAddress}], status ~ [${res.statusCode}, response ~ [${res.statusMessage}]]`);
    });
    next();
});
/** Routes */
router.use("/api/v1", routes_1.default);
/** Parse the request */
router.use(body_parser_1.default.urlencoded({ extended: false }));
router.use(body_parser_1.default.json());
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allos-Methods", "*");
        return res.status(200).json({});
    }
    next();
});
/** Error Handling */
router.use((req, res, next) => {
    const error = new Error("not found");
    return res.status(404).json({
        message: error.message,
    });
});
const httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, () => logging_1.default.info(NAMESPACE, `Server running on ${config_1.default.server.hostname}:${config_1.default.server.port}`));
//# sourceMappingURL=app.js.map