const express = require('express')
const server = express()
const http = require('http').createServer(server)
const path = require('path')
const port = process.env.PORT || 3000
const logger = require('morgan')

server.use(logger("combined"))
server.use(express.static(path.join(__dirname, 'public')))

server.get('/', function(request, response){
  response.send('Hello World')
})

server.set(port)

http.listen(port)

module.exports = server
