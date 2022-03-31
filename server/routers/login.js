// 登录路由
const express = require('express');
const router = express.Router();//创建路由对象
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

// 根目录是 /api/login
router.post('/',(req,res)=>{
    User.findOne(req.body).then(
        data =>{
            console.log('data',data);
            if(!data){//数据库没有查找到 返回null
                res.status(401).json({
                    errors: {password:'用户名或密码错误!'}
                })
            }else {
                // 允许登入 生成和发送token令牌给客户端
                const token = jwt.sign({
                    id:data.id,
                    username:data.username,
                    role:data.role,
                },config.jwtSecret)
                res.send(token);
            }
        }
    )
})

module.exports = router;