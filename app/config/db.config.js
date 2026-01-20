export default {
  HOST: "localhost",
  USER: "will",
  PASSWORD: "not_req_locally",
  DB: "testdb",
  dialect: "postgres",
  PORT: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
