const mongoose = require('mongoose');
const User = require('../model/User');
mongoose.connect('mongodb://127.0.0.1:27017/studentWeb',{ 
    useNewUtlParser: true,
    useUnifiedTopology:true
}).then(()=>console.log('数据库连接成功！'),
err=>console.log(err,'数据库连接失败！'));

// const userSchema = new mongoose.Schema({
//     username: {
//       type: String,
//       required: [true, '必须传入 username!'],
//       trim: true
//     },
//     password: {
//       type: String,
//       required: [true, '必须传入 password!'],
//       trim: true
//     },
//     role:{
//         type:String,
//         required: [true, '必须传入 role!'],
//         trim: true
//     }
//   })
//   const User = mongoose.model('User',userSchema)