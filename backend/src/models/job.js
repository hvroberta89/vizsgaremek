const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const JobSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },  
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    require: true
  },  
  description: {
    type: String,
    require: true
  },  
  settlement:{
    type: String,
    require: true
  },  
  date:{
    type: Date,
    require: true
  },  
  time:{
    type: String,
    require: false
  },  
  tools: {
    type: Boolean,
    require: true
  },  
  wage:{
    type: String,
    require: false
  },
  amount:{
    type: Number,
    require: false
  },  
  active: {
    type: Boolean,
    require: true
  },  
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