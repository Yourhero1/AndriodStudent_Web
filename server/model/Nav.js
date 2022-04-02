const mongoose = require('mongoose');
const navSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, '必须传入 username!'],
      trim: true
    },
    navName:{
        type:String,
        trim: true
    },
    number:{
        type:Number,
        trim:true
    }
  })
  const Nav = mongoose.model('Nav',navSchema)
  module.exports = Nav;