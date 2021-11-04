const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usersSchema = new Schema({
  userId: String,
  password: String
});

usersSchema.set('timestamps', true);

module.exports = {
    usersSchema
}