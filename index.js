require('dotenv').config()

const express = require('express')
const cors = require('cors')

const server = express()
const port = process.env.PORT

server.use(express.json())
server.use(cors())


const friends = [
  { id: 1, name: 'Blinx', quote: "Nerver give up, there's always a possibility" },
  { id: 2, name: 'Messi', quote: "Best among the bests footballers"},
  { id: 3, name: 'Buhari', quote: "One Naira will equal one dollar"},
];

server.get('/api/people', (req, res) => {
  res.json(friends);
});

server.get('*', (req, res) => {
    res.json('Welcome to default point!')
})

server.listen(port, ()=>{
    console.log('listening on ' + port)
})
