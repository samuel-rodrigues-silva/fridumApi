import express from 'express';
import routes from './routes/index';
const app = express();


app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    next();
});

app.use(express.json());
app.use(routes);
export default app;