import express from 'express';
import route from './route';
const app = express();

route(app)

app.listen(3001, () => {
    console.log('Server started')
})