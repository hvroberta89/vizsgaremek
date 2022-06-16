const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const JobSchema = mongoose.Schema({
  title: String,
  category: String,
  description: String,
  settlement: String,
  date: String,
  time: String,
  tools: Boolean,
  wage: String,
  amount:Number,
  active: Boolean,
  editor_user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  worker_user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }
}, {
  collection: 'jobs',
  timeStamps: true
});

JobSchema.plugin(idValidator);

module.exports = mongoose.model('Job', JobSchema);