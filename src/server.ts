import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorlogger, logger } from './shared/logger'
function bootstrap() {
  try {
    mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      logger.info(`application listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error('error incoming', error)
  }
}

bootstrap()
