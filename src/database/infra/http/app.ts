import express from 'express';
import cors from 'cors'
import routes from './routes/index';
const app = express();

const corsOptions = {
    origin: '*',
}

app.use(cors(corsOptions))

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods: GET, POST, OPTIONS,PATCH, DELETE");
    next();
});

app.use(express.json());
app.use(routes);
export default app;