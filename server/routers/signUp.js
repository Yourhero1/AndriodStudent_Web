//注册路由
const express = require('express');
// 引入验证规则库
const isEmpty = require('lodash/isEmpty');
const validator = require('validator');
const router = express.Router();
const User = require('../model/User');

const validate = data => {
  // 验证用户名和密码是否为空, 个人感觉这个验证应该放在前端, 没有必要发请求
  const {
    username,
    password,
    role
  } = data
  let errors = {} // 错误对象
  if (validator.isEmpty(username)) { // 如果为空
    errors.username = '请输入用户名!'
  }
  if (validator.isEmpty(password)) {
    errors.password = '请输入密码!'
  }
  if (validator.isEmpty(role)) {
    errors.role = '请选择身份!'
  }
  return {
    errors,
    isValid: isEmpty(errors)
    // 亲测 validator.isEmpty 只能接受字符串
  }
}

// 根目录是 /api/signUp
router.post('/', (req, res) => {
  const { errors, isValid } = validate(req.body);
  if (isValid) {// 合法
    // 注册页面 添加数据进入数据库
    console.log('zuce shu ju ku')
    User.create(req.body).then(data => console.log(data));
    res.json({ success: true, errors })
  } else {
    res.status(400).json(errors)
  }
})

// 验证用户名是否重复
router.get('/:username', (req, res) => {
  console.log('query:', req.params)
    User.findOne(req.params)
      .then(data => {
        if (!data) { // 没有查询到会返回 null
          res.json({ success: true })
        } else { // 查询成功, 用户名重复了
          res.status(400).json({
            username: '用户名重复了, 请换一个用户名!'
          })
        }
      })
})
module.exports = router