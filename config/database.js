

if (process.env.NODE_ENV === 'development') {

  module.exports = ({ env }) => ({
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
      debug: false,
    },
  });
  
} else {

  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('PGHOST', '127.0.0.1'),
        port: env.int('PGPORT', 5432),
        database: env('PGDATABASE', 'strapi'),
        user: env('PGUSER', 'strapi'),
        password: env('PGPASSWORD', 'password'),
        ssl: env.bool(true),
      },
    },
  });
  
}
