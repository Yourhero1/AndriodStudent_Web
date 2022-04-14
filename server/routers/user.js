// 登录路由
const express = require('express');
const router = express.Router();
const User = require('../model/User');

// 获取所有用户信息
router.get('/', (req, res) => {
    User.find({role:'student'},'username role').then((data)=>{
        res.json(data);
    })
  })

// 删除学生信息
router.get('/:username', (req, res) => {
    console.log('username:', req.params)
      User.deleteOne({username:req.params.username,role:'student'})
        .then(data => {
            console.log('删除数据返回的data',data);
            if(data.deletedCount){
                res.json({success: true })
                console.log('删除成功！')
            }else{
                res.status(400).json({error:'删除失败!'});
                console.log('删除失败!')
            }
        //   if (!data) { // 没有查询到会返回 null
        //     res.json({ success: true })
        //   } else { // 查询成功, 用户名重复了
        //     res.status(400).json('删除失败！')
        //   }
        })
  })


  module.exports = router