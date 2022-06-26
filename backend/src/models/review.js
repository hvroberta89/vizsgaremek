const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const ReviewSchema = mongoose.Schema({
  editor_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rated_user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  score: { 
    type: Number,
    required:true,
    min: 0,
    max: 5,
  },
  positive: { 
    type: String
  },
  negative: { 
    type: String
  },
  review_date: {
    type: Object,
    required:true,
  }
},{
  collection: 'reviews',
  timestamps: true,
});

ReviewSchema.plugin(idValidator);

module.exports = mongoose.model('Review', ReviewSchema);
