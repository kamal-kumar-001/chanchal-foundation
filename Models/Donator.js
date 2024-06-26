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
  address: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  pancard: {
    type: String,
  },
  remarks: {
    type: String,
  },
  message: {
    type: String,
  },
  paymentStatus: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true});

mongoose.models = {};
export default mongoose.model('Donator', DonatorSchema);
