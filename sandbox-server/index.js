const express = require('express')
const server = express()
const http = require('http').createServer(server)
const path = require('path')
const port = process.env.PORT || 3000
const logger = require('morgan')

const trails = require('./routes/trails')

server.use('/', trails)
server.use(logger("combined"))
server.use(express.static(path.join(__dirname, 'public')))

server.set(port)

http.listen(port)

module.exports = server
