import express from 'express';
import cors from 'cors'
import routes from './routes/index';
import path from 'path'
var app = express();

app.use(cors({
    origin: [
        '*',
        'http://localhost:3000',
        'http://localhost:3001',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:3001'
    ]
}))

app.use(express.json());

app.get('/image/:img', function (req, res) {
    const { img } = req.params
    res.sendFile(path.resolve(__dirname, '../../../../', `uploads/${img}`));
});

app.use(routes);
export default app;