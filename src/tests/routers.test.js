const { TestScheduler } = require('jest');
const request = require('supertest');

const app = require('../app');

test('test / route', (done)=>{
  request(app)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      return done();
    });
});

test('test /data route', (done)=>{
  request(app)
    .get('/data')
    .expect(200)
    .end(function (err, res) {
      expect(typeof(res.body)).toEqual('object');
      if (err) return done(err);
      return done();
    });
});

test('test /search route', (done)=>{
  request(app)
    .get('/search')
    .expect(200)
    .end(function (err, res) {
      expect(typeof(res.body)).toEqual('object');
      if (err) return done(err);
      return done();
    });
});