import express from 'express';
import cors from 'cors'
import routes from './routes/index';
import path from 'path'
var app = express();

app.use(cors())

app.use(express.json());

app.get('/image/:img', function (req, res) {
    const { img } = req.params
    console.log(img);
    console.log(path)
    res.sendFile(`/app/build/uploads/${img}`);
});

app.use(routes);
export default app;