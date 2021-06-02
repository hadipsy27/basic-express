const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  name: String,
  email: String,
  password: String
}, {timestamps: true} )

const User = mongoose.model('User', userSchema) // User = nama tabel di db
module.exports = User