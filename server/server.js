const express = require('express')
const signUp = require('./routers/signUp')
const login = require('./routers/login')
const rating = require('./routers/rating')
const description = require('./routers/description')
const nav = require('./routers/nav')
const bodyParser = require('body-parser')
const user = require('./routers/user')
const duration = require('./routers/duration')

const mongoose = require('mongoose'); //启动mongodb
mongoose.connect('mongodb://127.0.0.1:27017/studentWeb',{ 
    useNewUtlParser: true,
    useUnifiedTopology:true
}).then(()=>console.log('数据库连接成功！'),
err=>console.log(err,'数据库连接失败！'));

const app = express()//创建服务器

app.use(bodyParser.json());

app.use('/api/signUp',signUp);

app.use('/api/login',login);

app.use('/api/rating',rating);

app.use('/api/description',description);

app.use('/api/nav',nav);

app.use('/api/user',user);

app.use('/api/duration',duration)

app.listen(3031,()=> console.log('服务器启动了...'))
