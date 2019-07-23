var request = require('supertest');
var server = require('./server');
var chai = require('chai');

var expect = chai.expect;

describe('testing the root path', function () {
  it('responds successfully', function (done) {
    request(server)
      .get('/')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
