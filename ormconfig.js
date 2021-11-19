module.exports = {
   type: "mysql",
   url: process.env.JAWSDB_URL,
   // host: process.env.DB_HOST,
   // port: Number(process.env.DB_PORT),
   // username: process.env.DB_USER,
   // password: process.env.DB_PASSWORD,
   // database: process.env.DB_SCHEMA_NAME,
   synchronize: false,
   entities: [
      process.env.NODE_ENV === 'development'
         ? './src/modules/**/infra/typeorm/entities/*.ts'
         : './build/src/modules/**/infra/typeorm/entities/*.js',
      process.env.NODE_ENV === 'development'
         ? './src/modules/**/infra/typeorm/entities/*.ts'
         : './dist/modules/**/infra/typeorm/entities/*.js',
   ],
   migrations: [
      process.env.NODE_ENV === 'development'
         ? './src/database/migration/*.ts'
         : './build/src/database/migration/*.js',
   ],
   cli: {
      migrationsDir:
         process.env.NODE_ENV === 'development'
            ? './src/src/database/migration'
            : '/dist/src/database/migration',
   }
}