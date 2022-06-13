const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const JobSchema = mongoose.Schema({
  title: { 
    type: String,
    required:true,
  },
  nature: { 
    type: String,
    required:true,
  },
  description: { 
    type: String,
    required:true,
  },
  settlement: { 
    type: String,
    required:true,
  },
  date: { 
    type: Date,
    required:true,
  },
  time: { 
    type: String,
    required:true,
  },
  tools: { 
    type: Boolean,
    required:true,
  },
  wage: { 
    type: String,
    required:true,
  },
  amount: { 
    type: Number,
    required:true,
  },
  active: { 
    type: Boolean,
    required:true,
  },
  editor_user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  worker_user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: false
  },
}, {
  collection: 'jobs',
  timeStamps: true
});

JobSchema.plugin(idValidator);

module.exports = mongoose.model('Job', JobSchema);