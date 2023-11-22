import mongoose from 'mongoose'
import Logger from 'bunyan'

import { environment } from '@root/environment'

const log: Logger = environment.createLogger('setupDatabase')

export default () => {
  const connect = () => {
    console.log(environment.DATABASE_URL)
    mongoose
      .connect(`${environment.DATABASE_URL}`)
      .then(() => {
        log.info('Successfully connected to database')
      })
      .catch((error) => {
        log.error(`Error connecting to database: ${error}`)
        return process.exit(1)
      })
  }
  connect()
  mongoose.connection.on('disconnected', connect)
}
