// 提交评分板块
const express = require('express');
const isEmpty = require('lodash/isEmpty');
const router = express.Router();
const Nav = require('../model/Nav');

router.post('/', (req, res) => {
    const { username, navName } = req.body;
    console.log(req.body);
    Nav.findOne({ username, navName }).then(data => {
        if (isEmpty(data)) {
            Nav.create({ username, navName,number:0}).then(data =>console.log(data));
        }else{
            Nav.updateOne({ username, navName, number:data.number+1}).then(data => console.log(data));
        }
    }, err => {
        console.log('查询失败!', err);
    })
    res.json({ success: true })
})
module.exports = router;