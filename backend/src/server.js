const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./docs/swagger.yaml');

const app = express();

const loginRouter =require('./controllers/login/login.router');
const userRouter =require('./controllers/user/user.router');
const jobRouter =require('./controllers/job/job.router');
const workerRouter =require('./controllers/worker/worker.router');
const reviewRouter =require('./controllers/review/review.router');
const categoryRouter =require('./controllers/category/category.router');

const { host, user, pass} = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
  user, 
  pass,
})
.then( connect => {
  console.log('Connection success.');
  
  //Database seeding
  //require('./seed/seeder');
  //console.log('Database is seeded.');
})
.catch( err =>{
  throw new Error(err.message);
});

// Cross origin resource sharing: CORS
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

const authenticateJwt = require('./modules/auth/authenticate'); 

// Upload files
app.use(fileUpload());
app.post('/upload', require('./modules/fileUploader/fileUpload'));

//Login
app.use('/login', loginRouter);
// Users
app.use('/users', authenticateJwt, userRouter);
// Jobs
app.use('/jobs', authenticateJwt, jobRouter);
// Workers
app.use('/workers', authenticateJwt, workerRouter);
// Review
app.use('/reviews', authenticateJwt, reviewRouter);
// Category
app.use('/categories', authenticateJwt, categoryRouter);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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