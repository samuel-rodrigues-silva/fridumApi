"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
typeorm_1.createConnection()
    .then(function () { return console.log("Succesfully connected with database"); })
    .catch(function (error) { return console.log('ERROR =>', error); });
//# sourceMappingURL=index.js.map