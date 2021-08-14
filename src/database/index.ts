import { createConnection } from 'typeorm';
createConnection()
    .then(() => console.log("Succesfully connected with database"))
    .catch((error) => console.log('ERROR =>', error));
