const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const UserSchema = mongoose.Schema({
  user_name: { 
    type: String,
    required:true,
    index: {
      unique: true,
    },
  },
  first_name: { 
    type: String,
    required:true,
  },
  last_name: { 
    type: String,
    required:true,
  },
  gender: { 
    type: String,
    required:true,
  },
  birth_date: { 
    type: Date,
    required:true,
  },
  address: {
    type: String,
    //type: Object,
    required: true,
  },
  email: { 
    type: String,
    required:true,
    index: {
      unique: true,
    },
  },
  mobil_number: { 
    type: String,
    required:true,
  },
  photo: {
    type: String,
    required:false,
  },
  password: {
    type: String,
    required: true,
  },    
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'review'
    }
  ],
  asWorker: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'worker'
    }
  ],
  asEmployer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'job'
    }
  ]


},{
  collection: 'users',
  timestamps: true,
});

UserSchema.plugin(idValidator);

module.exports = mongoose.model('User', UserSchema);