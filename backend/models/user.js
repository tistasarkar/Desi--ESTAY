const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'artisan', 'admin'], default: 'customer' },
  isApproved: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);