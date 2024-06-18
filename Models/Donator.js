const mongoose = require('mongoose');

const DonatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  amount: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true});
mongoose.models = {};
export default mongoose.model('Donator', DonatorSchema);
