const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const idValidator = require('mongoose-id-validator');

const SALT_WORK_FACTOR = 10;

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
  role: {
    type: Number,
    require: true,
  }
},{
  collection: 'users',
  timestamps: true,
});

UserSchema.pre('save', function(next) {
  const user = this;
  if (!this.isModified('password')){
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      return next(err);
    };

    bcrypt.hash(user.password, salt, (err,hash) => {
      if (err) {
        return next(err);
      };
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if (err) {
      return cb(err);
    };

    cb(null, isMatch);
  });
};

UserSchema.plugin(idValidator);

module.exports = mongoose.model('User', UserSchema);