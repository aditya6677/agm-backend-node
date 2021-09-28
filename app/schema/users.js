const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usersSchema = new Schema({
  userId: String,
  password: String
});

module.exports = {
    usersSchema
}