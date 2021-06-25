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
      "./src/modules/**/infra/typeorm/entities/*.ts"
   ],
   "migrations": [
      "./src/database/migration/*.ts"
   ],
   "cli": {
      "migrationsDir": ".src/database/migration",
      "subscribersDir": ".src/subscriber",
      "entitiesDir": ".src/modules/**/typeorm/entities"
   }
}