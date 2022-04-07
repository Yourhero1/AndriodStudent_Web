const mongoose = require('mongoose');
const descriptionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, '必须传入 username!'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  navValue: {
    type: String,
    trim: true
  },
})
const Description = mongoose.model('Description', descriptionSchema)
module.exports = Description;