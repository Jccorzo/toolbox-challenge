import express from 'express'
import cors from 'cors'
import route from './route'
const app = express()
app.use(cors())
route(app)

app.listen(3001, () => {
  console.log('Server started')
})
