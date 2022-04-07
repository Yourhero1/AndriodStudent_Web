// 提交评分板块
const express = require('express');
const isEmpty = require('lodash/isEmpty');
const router = express.Router();
const Nav = require('../model/Nav');

router.post('/', (req, res) => {
    const { username, navName } = req.body;
    console.log('测试',req.body);
    Nav.findOne({ username, navName,number }).then(data => {
        console.log('上传点击次数计算');
        console.log('data',data)
        if (isEmpty(data)) {
            Nav.create({ username, navName,number:data.number}).then(data =>console.log('111',data));
        }else{
            Nav.updateOne({ username, navName, number:data.number+1}).then(data => console.log('2222',data));
        }
    }, err => {
        console.log('查询失败!', err);
    })
    res.json({ success: true })
})

router.get('/getNav', (req, res)=>{
    Nav.find().then(data => {
        console.log('data数据11')
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