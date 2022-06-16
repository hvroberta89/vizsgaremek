const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const WorkerSchema = mongoose.Schema({
  editor_user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date_from: { 
    type: String,
    required:true,
  },
  date_to: { 
    type: String,
    required:true,
  },
  category: { 
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
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
},{
  collection: 'workers',
  timestamps: true,
});

WorkerSchema.plugin(idValidator);

module.exports = mongoose.model('Worker', WorkerSchema);