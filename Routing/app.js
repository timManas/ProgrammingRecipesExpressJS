const express = require('express')
const app = express()
const port = 3000

// What ?
// Routing refers to how app endpoints (URI) respond to client request

// Route Methods

app.get('/', (req, res) => {
  res.send('HomePage called')
})

app.get('/get', (req, res) => {
  res.send('app.get called')
})

app.post('/post', (req, res) => {
  res.send('app.post called')
})

app.put('/put', (req, res) => {
  res.send('app.put called')
})

app.delete('/delete', (req, res) => {
  res.send('app.delete called')
})

// Route paths

// Route Parameters

// Route Handlers

// Response Methods

// Routers

app.listen(port)
