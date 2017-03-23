const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../index')

chai.use(chaiHttp)

describe('sandbox-server', () => {

  context('homepage, onload', () => {

    it('Should respond with a status code of 200', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.text).to.equal('Welcome to Sandbox!')
        expect(res).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
      })
    })
  })

  context('Doodads search', (done) => {

    it('Should respond with a status code of 200', (done) => {
      chai.request(app)
      .get('/search')
      .query({'q':'doodads'})
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.text).to.equal('You searched for: \'doodads\'')
        expect(res).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
      })
    })
  })

  context('Bad request response', () => {

    it('Should respond with a status code of 400', (done) => {
      chai.request(app)
      .get('/search')
      .end((err, res) => {
        expect(res).to.have.status(400)
        expect(res.text).to.equal('You didn\'t provide a search query term :(')
        expect(res).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
      })
    })
  })

  context('Flying car post', () => {

    it('Should respond with a status code of 201', (done) => {
      chai.request(app)
      .post('/things')
      .send({'New thing created': 'flying car'})
      .end((err, res) => {
        expect(res).to.have.status(201)
        expect(res.text).to.equal('New thing created: flying car!')
        expect(res).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
      })
    })
  })

  context('Get some file', () => {

    it('Should respond with a status code of 200', (done) => {
      chai.request(app)
      .get('/somefile')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.text).to.equal('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
        expect(res).to.have.header('content-type', 'text/html; charset=utf-8')
        done()
      })
    })
  })

  context('Get json data', () => {

    it('Should respond with a status code of 200', (done) => {
      chai.request(app)
      .get('/myjsondata')
      .set('accept', 'application/json')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.text).to.equal('{"title":"some JSON data"}')
        expect(res).to.have.header('content-type', 'application/json; charset=utf-8')
        done()
      })
    })
  })

  context('Get old page', () => {

    it('Should respond with a status code of 301', (done) => {
      chai.request(app)
      .get('/old-page')
      .end((err, res) => {
        expect(res.statusCode).to.eql(301)
        expect(res.headers["content-location"]).to.equal('http://localhost:3000/newpage')
        done()
      })
    })
  })

  context('Post admin only', () => {

    it('Should respond with a status code of 403', (done) => {
      chai.request(app)
      .post('/admin-only')
      .send({'stuff': 'all'})
      .end((err, res) => {
        expect(res.statusCode).to.eql(403)
        done()
      })
    })
  })

  context('Not a page', () => {

    it('Should respond with a status code of 404', (done) => {
      chai.request(app)
      .get('/not-a-page')
      .end((err, res) => {
        expect(res.statusCode).to.eql(404)
        done()
      })
    })
  })

  context.only('Server error', () => {

    it('Should respond with a status code of 500', (done) => {
      chai.request(app)
      .get('/server-error')
      .end((err, res) => {
        expect(res).to.have.status(500)
        done()
      })
    })
  })
})
