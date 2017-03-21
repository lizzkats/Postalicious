const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.set('content-type', 'text/plain')
  response.send('Welcome to Sandbox!')
})
router.get('/search', (request, response) => {
  response.set('content-type', 'text/plain')
  response.send("You searched for: 'doodads'")
})

module.exports = router
