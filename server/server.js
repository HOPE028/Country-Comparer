const express = require('express')
const cors = require('cors')

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.use(express.json())

app.listen(4000, () => {
  console.log('WEB app has started at 4000')
})

app.get('/hello', (req, res) => {
  res.status(200).send({ message: 'Yes' })
})

// app.get('/')
