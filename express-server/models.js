var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {
    type: String,
    index: {
      unique: true
    },
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

User = mongoose.model('User', userSchema);

module.exports = {
    User:User
};
