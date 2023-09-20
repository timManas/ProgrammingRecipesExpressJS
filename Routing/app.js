const express = require('express')
const app = express()
const port = 3000

// What ?
// Routing refers to how app endpoints (URI) respond to client request

// Route Methods ------------------------
app.get('/', (req, res) => {
  res.send('ROOT')
})

app.get('/get', (req, res) => {
  res.send('get')
})

app.post('/post', (req, res) => {
  res.send('post')
})

app.put('/put', (req, res) => {
  res.send('put')
})

app.delete('/delete', (req, res) => {
  res.send('delete')
})

// Route paths ------------------------
app.get('/about', (req, res) => {
  res.send('about')
})

app.get('/about.text', (req, res) => {
  // Note the . gets treated as str value and not as regex
  res.send('about.text')
})

app.get('/about-text', (req, res) => {
  // Note the . gets treated as str value and not as regex
  res.send('about-text')
})

// Notice here acd, abcd  are accepted
// i think the b is ? ...hence b is optional
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})

// Notice here xbcd, xbbcd, xbbbbcd, xbbbbbbcd etc are accepted
app.get('/xb+cd', (req, res) => {
  res.send('xb+cd')
})

// Route Parameters ------------------------

// Route Handlers ------------------------

// Response Methods ------------------------

// Routers ------------------------

app.listen(port)
