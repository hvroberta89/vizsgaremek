const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const AddressSchema = mongoose.Schema({
  country: String,
  zipCode: Number,
  city: String,
  street: String,
  number: String,
});

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
    type: String,
    required:true,
  },
  address: AddressSchema,
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
  password: {
    type: String,
    required: true,
  },
  role: Number
},{
  collection: 'users',
  timestamps: true,
});

UserSchema.plugin(idValidator);

module.exports = mongoose.model('User', UserSchema);