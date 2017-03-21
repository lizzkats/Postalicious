const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../index')

chai.use(chaiHttp)

describe('sandbox-server', function(){

  context('homepage, onload', function(){

    it('Should respond with a status code of 200', function(done){
      chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.have.status(200)
        expect(res.text).to.equal('Welcome to Sandbox!')
        expect(res).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
      })
    })
  })
  
  context('Doodads search', function(done){

    it('Should respond with a status code of 200', function(done){
      chai.request(app)
      .get('/search')
      .query({'q':'doodads'})
      .end(function(err, res){
        expect(res).to.have.status(200)
        expect(res.text).to.equal('You searched for: \'doodads\'')
        expect(res).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
      })
    })
  })

  context('Bad request response', function(){

    it('Should respond with a status code of 400', function(done){
      chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.have.status(400)
        done()
      })
    })
    it('Should have a Content-Type of text/plain', function(){
      expect(res).to.have.header('content-type', 'text/plain')
    })
    it('Should have a body response that contains the string "You did not provide a search query term :("', function(){

    })
  })

  context('Flying car post', function(){

    it('Should respond with a status code of 201', function(done){
      chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.have.status(201)
        done()
      })
    })
    it('Should have a Content-Type of text/plain', function(){
      expect(res).to.have.header('content-type', 'text/plain')
    })
    it('Should have a body response that contains the string "New thing created: Flying car"', function(){

    })
  })

  context('Get some file', function(){

    it('Should respond with a status code of 200', function(done){
      chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.have.status(200)
        done()
      })
    })
    it('Should have a Content-Type of text/plain', function(){
      expect(res).to.have.header('content-type', 'text/plain')
    })
    it('Should have a body response that contains the string "This is a plain text file"', function(){

    })
  })

  context('Get html/text', function(){

    it('Should respond with a status code of 200', function(done){
      chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.have.status(200)
        done()
      })
    })
    it('Should have a Content-Type of html/text', function(){
      expect(res).to.have.header('content-type', 'html/text')
    })
    it('Should have a body response that contains the string "<!DOCTYPE html><html><body>This is an HTML file</body></html>"', function(){

    })
  })

  context('Get json data', function(){

    it('Should respond with a status code of 200', function(done){
      chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.have.status(200)
        done()
      })
    })
    it('Should have a Content-Type of application/json', function(){
      expect(res).to.have.header('content-type', 'application/json')
    })
    it('Should have a body response that contains the string "{title: some json data}"', function(){

    })
  })

  context('Get old page', function(){

    it('Should respond with a status code of 301', function(done){
      chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.have.status(301)
        done()
      })
    })
    it('Should contain a location header set localhost:3000/webpage', function(){

    })
  })

  context('Post admin only', function(){

    it('Should respond with a status code of 403', function(done){
      chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.have.status(403)
        done()
      })
    })
  })

  context('Not a page', function(){

    it('Should respond with a status code of 404', function(done){
      chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.have.status(404)
        done()
      })
    })
  })

  context('Server error', function(){

    it('Should respond with a status code of 500', function(done){
      chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.have.status(500)
        done()
      })
    })
  })
})
