import mongoose from 'mongoose'
import app from './app'
import config from './config'
function bootstrap() {
  try {
    mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      // console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    /* empty */
  }
}

bootstrap()
