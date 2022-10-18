const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const database = [];

let id = 0;
app.get('/', (req, res) => {
  res.json(database)
})

app.post('/', (req, res) => {
  const { todoData } = req.body;
  database.push({
    id: ++id,
    todos: todoData,
  });
  console.log(database)
  res.send('post success!');
})

app.listen(3001, () => {
  console.log('server on!');
})