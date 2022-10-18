const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3001, () => {
  console.log('server on!');
})