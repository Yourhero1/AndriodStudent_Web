// 提交评分板块
const express = require('express');
const isEmpty = require('lodash/isEmpty');
const router = express.Router();
const Nav = require('../model/Nav');

router.post('/', (req, res) => {
    const { username, navName } = req.body;
    console.log('测试',req.body);
    Nav.updateOne({ username, navName},{$inc:{number:1}},{upsert:true}).then((data) => {
        console.log('data数据测试',data)
    });
    res.json({ success: true })
})

router.get('/getNav', (req, res)=>{
    Nav.find().then(data => {
        if(data){
            res.json(data)
        }else{
            res.status(504).json({
                errors: '数据不存在！'
            })
        }
    });
})
module.exports = router;