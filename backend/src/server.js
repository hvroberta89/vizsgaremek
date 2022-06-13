const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const jobRouter =require('./controllers/job/job.router');
const userRouter =require('./controllers/user/user.router');

const { host, user, pass} = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
  user, 
  pass,
})
.then( connect => console.log('Connection success!') )
.catch( err =>{
  throw new Error(err.message);
});

// Cross origin resource sharing: CORS
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());


// Jobs
app.use('/jobs', jobRouter);
// Users
app.use('/users', userRouter);
// Index
app.use('/', (req, res) => {
  res.send('api server');
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    hasError: true,
    message: 'Server Error',
  });
});

module.exports = app;