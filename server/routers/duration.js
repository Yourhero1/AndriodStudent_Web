const express = require('express');
const router = express.Router();
const duration = require('../model/reportData');

router.post('/',(req, res)=>{
    console.log(req.body);
    duration.create(req.body).then(data => console.log(data));
    res.json({ success: true})
})

router.get('/getDuration', (req, res)=>{
    duration.find().then(data => {
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

module.exports = router;