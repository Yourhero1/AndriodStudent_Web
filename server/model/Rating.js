const mongoose = require('mongoose');
const ratingSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, '必须传入 username!'],
      trim: true
    },
    rating: {
      type: Number,
      trim: true
    },
    navValue: {
      type:String,
      trim: true
    },
  })
  const Rating = mongoose.model('Rating',ratingSchema)
  module.exports = Rating;