const express = require('express')
const server = express()
const cors = require('cors')
const http = require('http').createServer(server)
const path = require('path')
const port = process.env.PORT || 3000
const logger = require('morgan')
const trails = require('./routes/trails')

server.use(logger("combined"))
server.use(express.static(path.join(__dirname, 'public')))


server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
server.use('/', trails)

// server.get('/', function(request, response){
//   response.send('Welcome to the sandbox!')
// })

server.set(port)

http.listen(port)

module.exports = server
