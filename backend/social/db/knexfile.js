// Update with your config settings.

const { KnexSnakeCaseMapper } = require("objection");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "Test",
      user: "saifa",
      password: "saifdar340",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    ...KnexSnakeCaseMapper,
    useNullAsDefault: true,
    seeds: {
      directory: "./seeds",
    },
  },
};
