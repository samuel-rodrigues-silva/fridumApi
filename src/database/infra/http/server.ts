require('dotenv').config();
import app from './app'
import 'reflect-metadata'
import '../../index'

app.listen(process.env.PORT || 3000, () => {
    console.log("SERVER ON");
});