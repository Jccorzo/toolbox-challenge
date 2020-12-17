import express from 'express';
const app = express();

app.get('/iecho', (req, res) => {
    res.json({ message: "ok" })
})

app.listen(3000, () => {
    console.log('Server started')
})