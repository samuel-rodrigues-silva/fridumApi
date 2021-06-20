import app from './app'
import 'reflect-metadata'
import '../../index'

app.listen(8080, () => {
    console.log("SERVER ON");
});