import bunyan from 'bunyan'
import dotenv from 'dotenv'

dotenv.config()

class Enviroment {
  private readonly LOCAL_DB_URL = 'mongodb://localhost:27017'

  public DATABASE_URL: string | undefined
  public PORT: string | undefined
  public CLIENT_URL: string | undefined
  public JWT_TOKEN: string | undefined
  public NODE_ENV: string | undefined
  public SECRET_KEY_ONE: string | undefined
  public SECRET_KEY_TWO: string | undefined

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL || this.LOCAL_DB_URL
    this.PORT = process.env.PORT
    this.CLIENT_URL = process.env.CLIENT_URL
    this.JWT_TOKEN = process.env.JWT_TOKEN
    this.NODE_ENV = process.env.NODE_ENV
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO
  }

  createLogger(name: string): bunyan {
    return bunyan.createLogger({ name, level: 'debug' })
  }
  validateEnvConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (!value) throw new Error(`Missing enviroment variable ${key}`)
    }
  }
}

export const enviroment: Enviroment = new Enviroment()
