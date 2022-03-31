const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, '必须传入 username!'],
      trim: true
    },
    password: {
      type: String,
      required: [true, '必须传入 password!'],
      trim: true
    },
    role:{
        type:String,
        required: [true, '必须传入 role!'],
        trim: true
    }
  })

  const User = mongoose.model('User',userSchema)
  module.exports = User;