import express from 'express';
import cors from 'cors'
import routes from './routes/index';
import path from 'path'
var app = express();

var originsWhitelist = [
    'http://localhost:3000'     //this is my front-end url for development

];
var corsOptions = {
    origin: function (origin, callback) {
        console.log(origin);
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        console.log(isWhitelisted);
        callback(null, isWhitelisted);
    },
    credentials: true
}

app.use(cors(corsOptions))

app.use(express.json());

app.get('/image/:img', function (req, res) {
    const { img } = req.params
    res.sendFile(path.resolve(__dirname, '../../../../', `uploads/${img}`));
});
app.options('*', cors(corsOptions));
app.use(routes);
export default app;