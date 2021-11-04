import express from 'express';
import cors from 'cors'
import routes from './routes/index';
var app = express();

app.use(cors())

app.use(express.json());

app.get('/image/:img', function (req, res) {
    console.log(req.params)
});

app.use(routes);
export default app;