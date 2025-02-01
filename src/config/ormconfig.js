import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "nodev1",
  database: process.env.DB_NAME || "node_api",
  synchronize: true, // ❗ Set to `false` in production
  logging: false,
  entities: ["src/models/*.js"],
  migrations: ["src/migrations/*.js"],
  subscribers: ["src/subscribers/*.js"],
});
