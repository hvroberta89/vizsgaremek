const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const CategorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true
  },
},{
  collection: 'categories',
  timestamps: true,
});

CategorySchema.plugin(idValidator);

module.exports = mongoose.model('Category', CategorySchema);
