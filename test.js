var chai = require('chai')
  , chaihttp = require('chai-http');
const app = require('./app.js');
var expect = chai.expect;

chai.use(chaihttp);

describe('Test suite for headerParser', () => {

  it('Gets a response containing an object with keys \"ip\", \"languages\", and \"software\"', (done) => {
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.have.all.keys("ip", "languages", "software");
      done();
    })
  })
});
