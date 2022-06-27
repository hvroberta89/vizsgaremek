require('dotenv').config();

const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const { response } = require('jest-mock-req-res');
const { Test } = require('supertest');

const app = require('./server');
let token;

describe('REST API integration tests', () => {
  beforeEach(done => {
    const { host, user, pass } = config.get('database');
    mongoose.connect(`mongodb+srv://${host}`, {
      user,
      pass,
    }).then(conn => {
      console.log('Connection success!');

      supertest(app).post('/login')
        .set('Content-Type', 'application/json')
        .send({
          email: 'test@test.com',
          password: 'testpass'
        })
          .end((err, res) => {
            token = res.body.accessToken;
      
            done();
          })
        })
        .catch(err => {
            throw new Error(err.message);
        });
    });

    afterEach( done => {
        mongoose.connection.close( () => done() );
    });

    test('GET /users', done => {
       supertest(app).get('/users')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .then(response => {
            expect(Array.isArray(response.body)).toBeTruthy();
            done();
        });
    });

    test('GET /jobs', done => {
       supertest(app).get('/jobs')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .then(response => {
            expect(Array.isArray(response.body)).toBeTruthy();
            done();
        });
    });
    test('GET /workers', done => {
       supertest(app).get('/workers')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .then(response => {
            expect(Array.isArray(response.body)).toBeTruthy();
            done();
        });
    });

    test('GET /reviews', done => {
       supertest(app).get('/reviews')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .then(response => {
            expect(Array.isArray(response.body)).toBeTruthy();
            done();
        });
    });

    test('GET /categories', done => {
       supertest(app).get('/categories')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .then(response => {
            expect(Array.isArray(response.body)).toBeTruthy();
            done();
        });
    });
  });