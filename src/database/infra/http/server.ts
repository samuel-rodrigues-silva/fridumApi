require('dotenv').config();
import app from './app'
import 'reflect-metadata'
import '../../index'


app.listen(process.env.PORT || 8080, () => {
    console.log("SERVER ON");
});