export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
    db_username: process.env.DB_USER,
    db_password: process.env.DB_PASS,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  },
});
