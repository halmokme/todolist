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
  res.send('post success!');
})

app.delete('/', (req, res) => {
  const { id } = req.body;
  for(let i=0; i<database.length; i++) {
    if(database[i].id === id) {
      database.splice(i, 1);
      i--;
    }
  }
  console.log(database);
  res.send('delete success');
})

app.listen(3001, () => {
  console.log('server on!');
})