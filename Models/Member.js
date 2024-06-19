const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Number,
    required: false,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
}, {timestamps: true});

// Hash the password before saving
MemberSchema.pre('save', async function(next) {
  const member = this;
  if (member.isModified('password')) {
    member.password = await bcrypt.hash(member.password, 8);
  }
  next();
});

// Compare password to hashed password
MemberSchema.methods.comparePassword = async function(password) {
  const member = this;
  return bcrypt.compare(password, member.password);
};

mongoose.models = {};
export default mongoose.model('Member', MemberSchema);