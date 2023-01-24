import http from "http";
import express, { Router } from "express";
import config from "./config/config";
import logging from "./config/logging";
import Routes from "./routes/routes";
import bodyParser from "body-parser";

const NAMESPACE = "Server";
const router = express();

router.use((req, res, next) => {
  logging.info(
    NAMESPACE,
    ` REQUEST --  [${req.method}] ~ ${req.url}, ~ [${req.socket.remoteAddress}]`
  );

  res.on("finish -- ", () => {
    logging.info(
      NAMESPACE,
      `RESPONSE -- [${req.method}] ~ ${req.url}], ~ [${req.socket.remoteAddress}], status ~ [${res.statusCode}, response ~ [${res.statusMessage}]]`
    );
  });

  next();
});

/** Routes */
router.use("/api/v1", Routes);

/** Parse the request */
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
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
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () =>
  logging.info(
    NAMESPACE,
    `Server running on ${config.server.hostname}:${config.server.port}`
  )
);
