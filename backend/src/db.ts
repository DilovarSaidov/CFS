import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "farzin_db",
  password: "qwerty",
  port: 5432,
});

export { pool };
