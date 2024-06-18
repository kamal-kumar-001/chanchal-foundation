const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  verified: {
    type: Boolean,
    default: false
  },
}, {timestamps: true});

mongoose.models = {};
export default mongoose.model('User', UserSchema);
