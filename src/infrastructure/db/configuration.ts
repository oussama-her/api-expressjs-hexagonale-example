import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: "config.env" });

interface Config {
  username: string;
  password: string;
  database: string;
  host: string;
  port: string;
  dialect: string;
}

interface IConfigGroup {
  development: Config;
  test?: Config;
  production?: Config;
}

const dbConfig: IConfigGroup = {
  development: {
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DBNAME || "",
    host: process.env.DB_HOST || "",
    port: process.env.DB_PORT || "",
    dialect: process.env.DB_DIALECT || "mysql"
  }
};

export default dbConfig;
