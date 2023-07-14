import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf, prettyPrint } = format;
import path from 'path';
import DailyRotateFile from 'winston-daily-rotate-file';

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minuets = date.getMinutes();
  const seconds = date.getSeconds();
  return `{${date.toString()} ${hour}:${minuets}:${seconds}}   [${label}] ${level}:${message}`;
});

const errorlogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'error' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),

    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'phu-%DATE%-error.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Info' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'phu-%DATE%-success.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

export { logger, errorlogger };
