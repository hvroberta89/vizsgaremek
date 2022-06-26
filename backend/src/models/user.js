const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const SALT_WORK_FACTOR = 10;

const AddressSchema = mongoose.Schema({
  country: {
    type: String,
    require: true,
  },
  zipCode:{
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  street: {
    type: String,
    require: true,
  },
  number:{
    type: String,
    require: true,
  },
});

const UserSchema = mongoose.Schema({
  user_name: { 
    type: String,
    required:true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9\_\-]{4,25}$/.test(v);
      }
    },
    index: {
      unique: true,
    },
  },
  first_name: { 
    type: String,
    required:true,
    validate: {
      validator: function(v) {
        return /^[a-űA-Ű\-\.]{3,25}$/.test(v);
      }
    },
  },
  last_name: { 
    type: String,
    required:true,
    validate: {
      validator: function(v) {
        return /^[a-űA-Ű\-\.]{3,25}$/.test(v);
      }
    },
  },
  gender: { 
    type: String,
    required:true,
    enum: ["Nő", "Férfi"]
  },
  birth_date: { 
    type: Object,
    required: true,
  },
  photo: {
    type: String
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
    validate: {
      validator: function(v) {
        return /^[0-9\-\+\/]{9,20}$/.test(v);
      }
    },
  },
  role: {
    type: Number,
    require: true,
  }
},{
  collection: 'users',
  timestamps: true,
});

UserSchema.plugin(require('mongoose-bcrypt'));
UserSchema.plugin(idValidator);

module.exports = mongoose.model('User', UserSchema);