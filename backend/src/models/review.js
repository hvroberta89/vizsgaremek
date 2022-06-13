const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const JobSchema = mongoose.Schema({
  editor_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  rated_user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  score: { 
    type: Number,
    required:true,
    min: 1,
    max: 5,
  },
  positive: { 
    type: String,
    required:true,
  },
  negative: { 
    type: String,
    required:true,
  },
  review_date: {
    type: Date,
    required: true,
  }
},{
  collection: 'reviews',
  timestamps: true,
});

ReviewSchema.plugin(idValidator);

module.exports = mongoose.model('Review', ReviewSchema);
