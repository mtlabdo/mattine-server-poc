import dotenv from "dotenv";
import path from "path";
import logging from "../config/logging";

const configDotenv = {
  path: path.join(__dirname, "../.env"),
};
dotenv.config(configDotenv);

const logging_namespace = "database";

const Connection = require("tedious").Connection;
const config = {
  server: process.env.SBQ_HOST, //update me
  authentication: {
    type: "default",
    options: {
      userName: process.env.USER_SQL, //update me
      password: process.env.PASSWORD_SQL, //update me
    },
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: false,
    database: process.env.SQL_DATABASE, //update me
    rowCollectionOnRequestCompletion: true,
  },
};

export const connection = new Connection(config);
connection.connect();
connection.on("connect", function (err: any) {
  if (err) {
    logging.error(logging_namespace, "error on connecting to database", err);
  } else {
    logging.info(logging_namespace, "database connected with success");
  }
});
