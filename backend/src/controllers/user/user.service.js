const User = require('../../models/user');

// Create new User
exports.create = userData => {
  const user = new User(userData);
  return user.save();
}
