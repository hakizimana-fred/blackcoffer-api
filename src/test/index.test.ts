 import chai, { expect } from 'chai'
 import chaiHttp from 'chai-http'
 import server from '../app'

 chai.use(chaiHttp)

describe('healthcheck route test', () => {
    it('gives welcome message', (done) => {
        chai
            .request(server)
            .get('/healthcheck')
            .then((res) => {
                expect(res.text).to.equal('Hi! welcome')
                done()
            }) 
    })
})

describe('details route test', () => {
    it('Fetches details from database', (done) => {
        chai
            .request(server)
            .get('/api/v1/details')
            .then((res) => {
                expect(res.status).to.equal(200)
                done()
            }) 
            .catch(done)
    })
})