// 提交评分板块
const express = require('express');
const router = express.Router();//创建路由对象
const Rating = require('../model/Rating');

router.post('/',(req, res)=>{
    console.log(req.body);
    Rating.create(req.body).then(data => console.log(data));
    res.json({ success: true})
})

router.get('/getRating', (req, res)=>{
    Rating.find().then(data => {
        console.log('data数据',data)
        if(!data){
            res.json(data)
        }else{
            res.status(504).json({
                errors: '数据不存在！'
            })
        }
    });
})
module.exports = router