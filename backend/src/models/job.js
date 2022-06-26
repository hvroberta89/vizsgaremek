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
    type: Object
  },  
  time:{
    type: String
  },  
  tools: {
    type: Boolean,
    require: true
  },  
  wage:{
    type: String
  },
  amount:{
    type: Number
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
    ref: 'User'
  }
}, {
  collection: 'jobs',
  timeStamps: true
});

JobSchema.plugin(idValidator);

module.exports = mongoose.model('Job', JobSchema);