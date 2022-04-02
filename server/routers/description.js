// 提交评分板块
const express = require('express');
const router = express.Router();
const Description = require('../model/Description');

router.post('/',(req, res)=>{
    console.log(req.body);
    Description.create(req.body).then(data => console.log(data));
    res.json({ success: true})
})

router.get('/getDescription', (req, res)=>{
    Description.find().then(data => {
        console.log('data数据',data)
        if(data){
            res.json(data)
        }else{
            res.status(504).json({
                errors: '数据不存在！'
            })
        }
    });
})
module.exports = router