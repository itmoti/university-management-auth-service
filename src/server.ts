import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorlogger, logger } from './shared/logger';
import { Server } from 'http';
let server: Server;

process.on('uncaughtException', error => {
  errorlogger.error(error);
  process.exit(1);
});
function bootstrap() {
  try {
    mongoose.connect(config.database_url as string);
    server = app.listen(config.port, () => {
      logger.info(`application listening on port ${config.port}`);
    });
  } catch (error) {
    errorlogger.error('error incoming', error);
  }
  process.on('unhandledRejection', error => {
    // eslint-disable-next-line no-console
    console.log('Unhandled Rejection is detected , we are closing our server');
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  logger.info('Sigterm is received');
  if (server) {
    server.close();
  }
});
