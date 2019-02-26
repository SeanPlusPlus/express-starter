const chai = require('chai')
const chaiHttp = require('chai-http')
const dotenv = require('dotenv')

const app = require('./index')
const version = require('./version')

dotenv.config()

const { expect } = chai

chai.use(chaiHttp)


describe('App', () => {
  describe('/', () => {
    it('hits the root resource', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          const obj = { version }
          expect(res.body).to.deep.equal(obj)
          done()
        })
    })
  })
})
