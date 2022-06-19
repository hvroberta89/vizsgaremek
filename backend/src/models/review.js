const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const ReviewSchema = mongoose.Schema({
  editor_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  rated_user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  score: { 
    type: Number,
    required:true,
    min: 1,
    max: 5,
  },
  positive: { 
    type: String,
    required: false,
  },
  negative: { 
    type: String,
    required: false,
  },
  review_date: {
    type: String,
    required: true,
  }
},{
  collection: 'reviews',
  timestamps: true,
});

ReviewSchema.plugin(idValidator);

module.exports = mongoose.model('Review', ReviewSchema);
