const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const WorkerSchema = mongoose.Schema({
  editor_user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  category: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  date_from: { 
    type: Object,
    required:true
  },
  date_to: { 
    type: Object,
    required:true
  },
  description: {
    type: String,
    required:true
  },
  settlement: { 
    type: String,
    required:true
  }
},{
  collection: 'workers',
  timestamps: true,
});

WorkerSchema.plugin(idValidator);

module.exports = mongoose.model('Worker', WorkerSchema);