import dotenv from 'dotenv';
import path from 'path';
// eslint-disable-next-line no-undef
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  DEFAULT_USERS_PASSWORD: process.env.DEFAULT_USERS_PASSWORD,
};
