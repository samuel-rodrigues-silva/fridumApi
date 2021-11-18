import express from 'express';
import cors from 'cors'
import routes from './routes/index';
import path from 'path'
var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-PINGOTHER,X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(cors())

app.use(express.json());

app.get('/image/:img', function (req, res) {
    const { img } = req.params
    res.sendFile(path.resolve(__dirname, '../../../../', `uploads/${img}`));
});
app.use(routes);
export default app;