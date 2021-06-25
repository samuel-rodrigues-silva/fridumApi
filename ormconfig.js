console.log('PROCESS:' + process.env.JAWSDB_URL);
module.exports = {
   "type": "mysql",
   "url": process.env.JAWSDB_URL,
   // "port": 3306,
   // "username": "root",
   // "password": "",
   // "database": "fridum",
   "synchronize": true,
   "logging": false,
   "entities": [
      "build/modules/**/infra/typeorm/entities/*.js"
   ],
   "migrations": [
      "build/database/migration/*.js"
   ],
   "subscribers": [
      "./build/subscriber/**/*.js"
   ],
   "cli": {
      "migrationsDir": "./src/database/migration",
      "subscribersDir": "./src/subscriber",
      "entitiesDir": "./src/modules/**/typeorm/entities"
   }
}