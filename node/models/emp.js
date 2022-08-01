const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
  empName: {
    type: String,
    required: true
  },
  empEmail: {
    type: String,
    required: true
  },
  empMobile: {
   type: String,
   required: true
  },
  empPassword: {
    type: String,
    required: true
   },
   dateCreated: {
    type: Date,
    required: false,
    default: Date.now
   },
});

module.exports = mongoose.model('Emp', empSchema);
