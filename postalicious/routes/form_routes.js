const express = require('express')
const router = express.Router()

const place = require('../methods')

router.post('/', (request, response) => {
  // console.log(request.body)
  place.buildRequest(request.body)
  .then(_ => console.log('done'))
  response.send(request.body)
})


module.exports = router
