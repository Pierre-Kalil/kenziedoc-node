const devEnv = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: "5432",
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: ["./src/entities/**/*.ts"],
  migrations: ["./src/migrations/*.ts"],
  cli: {
    migrationsDir: "./src/migrations",
  },
  logging: false,
  synchronize: false,
};

const prodEnv = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: ["./dist/entities/**/*.js"],
  migrations: ["./dist/database/migrations/*js"],
  cli: {
    migrations: "./dist/database/migrations",
  },
  synchronize: false,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
};

module.exports = process.env.NODE_ENV === "production" ? prodEnv : devEnv;
