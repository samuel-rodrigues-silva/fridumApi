require('dotenv').config();
import app from './app'
import 'reflect-metadata'
import '../../index'


app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    next();
});

app.listen(process.env.PORT || 3000, () => {
    console.log("SERVER ON");
});