const mongoose = require('mongoose');
const durationSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, '必须传入 username!'],
      trim: true
    },
    event_type: {
      type: String,
      trim: true
    },
    stayTime: {
      type:Number,
      trim: true
    },
    date:{
        type:String,
      trim: true
    }
  })
  const Duration = mongoose.model('Duration',durationSchema)
  module.exports = Duration;