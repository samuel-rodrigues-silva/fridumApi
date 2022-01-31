console.log('PROCESS:' + process.env.JAWSDB_URL);
module.exports = {
   "type": "mysql",
   "url": process.env.JAWSDB_URL,
   "port": 3306,
   "username": "root",
   "password": "root",
   "database": "fridum",
   "synchronize": true,
   "entities": [
      "./build/src/modules/**/infra/typeorm/entities/*.js"
   ],
   "migrations": [
      "./build/src/database/migration/*.js"
   ],
   "cli": {
      "migrationsDir": "./src/database/migration",
      "subscribersDir": "./src/subscriber",
      "entitiesDir": "./src/modules/**/typeorm/entities"
   }
}