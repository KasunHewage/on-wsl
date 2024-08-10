import winston from "winston";
import "winston-daily-rotate-file";

const { combine, timestamp, printf, colorize, align } = winston.format;

const consoleTransport = new winston.transports.Console({
  format: combine(
    colorize({ all: true }),
    timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }),
    printf((info) => {
      return `${info.timestamp} | ${info.level} | ${info.message}`;
    }),
  ),
});

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: "retail-admin_%DATE%.log",
  datePattern: "YYYY-MM-DD",
  // max time to keep old logs
  // maxFiles: '14d',
});
const errorFileRotateTransport = new winston.transports.DailyRotateFile({
  filename: "retail-admin-ERROR_%DATE%.log",
  datePattern: "YYYY-MM-DD",
  level: "error",
  // max time to keep old logs
  // maxFiles: '14d',
});

const logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    // align(),
    printf((info) => {
      return `${info.timestamp} | ${info.level} | ${info.message}`;
    }),
  ),
  transports: [consoleTransport, fileRotateTransport, errorFileRotateTransport],
});

export default logger;
