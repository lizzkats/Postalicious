const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.set('content-type', 'text/plain')
    .send('Welcome to Sandbox!')
})
router.get('/search', (request, response) => {
  if( request.query.q.length === undefined || request.query.q.length === 0 ){
    response.status(400)
      .set('content-type', 'text/plain')
        .send("You didn't provide a search query term :(")
  }else{
      response.set('content-type', 'text/plain')
        .send("You searched for: 'doodads'")
  }
})
router.post('/things', (request, response) => {
  response.status(201)
    .set('content-type', 'text/plain')
      .send("New thing created: flying car!")
})
router.get('/somefile', (request, response) => {
  response.status(200)
    .set('content-type', 'text/html')
      .send('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
})
router.get('/myjsondata', (request, response) => {
  if(request.headers.accept === 'application/json'){
    response.status(200)
      .set('content-type', 'application/json')
        .send(JSON.stringify({"title":"some JSON data"}))
  }
})
router.get('/old-page', (request, response) => {
  response.redirect(301,'/newpage')
})
router.get('/newpage', (request,response) => {
  response.status(301)
    .set('content-location', 'http://localhost:3000/newpage')
    .send('stuff')
})
router.post('/admin-only', (request, response) => {
  response.status(403)
    .send('Forbidden')
})
router.get('/server-error', (request, response) => {
  response.status(500)
    .send('sumpin broke')
})

module.exports = router
