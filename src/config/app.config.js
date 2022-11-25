import dotenv from "dotenv";
dotenv.config();

const pgConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

const SECRET = process.env.JWT_SECRET;

const PORT = process.env.PORT || 7777;

export { pgConfig, SECRET, PORT };
