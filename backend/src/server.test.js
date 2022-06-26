require('dotenv').config();

const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const { response } = require('jest-mock-req-res');
const { Test } = require('supertest');

const app = require('./server');
const User = require('./models/user');
const Category = require('./models/category');
const Job = require('./models/job');
const Worker = require('./models/worker');
const Review = require('./models/review');

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
          email: 'test@pass.com',
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
  });