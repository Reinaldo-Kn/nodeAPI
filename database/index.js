const mongoose = require('mongoose');

mongoose.connect('');
mongoose.Promise = global.Promise;

module.exports = mongoose;