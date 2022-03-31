import * as React from 'react';
import { useState } from 'react';
import { Form, Row, Col, Button, Notification } from '@douyinfe/semi-ui';
import style from './login.module.css';

const LoginForm = ({ props, isLogin }) => {
    const { Option } = Form.Select;
    const { Label, Section } = Form;
    const handleLogin = e => {
        const { username, password, role } = e;
        if (username.trim() && password.trim()) {
            props.actions.loginAction({ username, password, role })
                .then(res => {// 登入成功
                    Notification.success({ content: '登入成功！', duration: 3 })
                    props.history.push('/home')
                }, ({ response }) => {//登入失败
                    Notification.error({ content: '登入失败！', duration: 3 })
                })
        } else {// 如果用户名或密码没有输入
            Notification.success({ content: '请输入用户名或密码!', duration: 3 })
        }
    }
    const initValues = {
        username: '',
        password: '',
        role: 'student'
    }
    const handleSignUp = e => {
        console.log('e', e);
        const { username, password, role } = e;
        props.actions.checkUsername(username.trim()).then(res => {// 首先验证用户名是否重复
            if (res.data.success) {
                props.actions.signUpRequest({ username, password, role }) // 开始注册
                    .then(res => {
                        if (res.data.success) {// 后台验证成功
                            Notification.success({ content: '注册成功！', duration: 3 })
                            this.props.history.replace('/home') // 跳转页面
                        }
                    }, ({ response }) => {
                        console.log({ response })
                        Notification.error({ content: response.data, duration: 3 })
                    })
            }
        }, ({ response }) => {
            Notification.error({ content: response.data.username, duration: 3 })
        })
    }

    return (
        <Form layout='horizontal' className={style.formStyle} onSubmit={isLogin ? handleLogin : handleSignUp} initValues={initValues}>
            <Section text={isLogin ? '登入页面' : '注册页面'} style={{ textAlign: 'center' }}>
                <Row className={style.rowStyle}>
                    <Col span={6}><Label text='用户名' required={true}></Label></Col>
                    <Col span={18}><Form.Input field='username' label='用户名' noLabel={true} placeholder={'请输入用户名'}
                        trigger='blur' rules={[
                            { required: true, message: '用户名不能为空!' },
                            { type: 'string', message: 'type error' },
                            { validator: (rule, value) => value !== ' ', message: '用户名不能为空!' }
                        ]}
                    /></Col>
                </Row>
                <Row className={style.rowStyle}>
                    <Col span={6}><Label text='密码' required={true}></Label></Col>
                    <Col span={18}><Form.Input field='password' label={{ text: '密码' }} noLabel={true}placeholder={'请输入密码'} 
                            trigger='blur' mode='password' rules={[
                            { required: true, message: '密码不能为空!' },
                            { type: 'string', message: 'type error' },
                            { validator: (rule, value) => value !== ' ', message: '密码不能为空!' }
                        ]} /></Col>
                </Row>
                <Row className={style.rowStyle}>
                    <Col span={6}><Label text='角色' required={true} /></Col>
                    <Col span={18}><Form.Select field="role" label='角色' noLabel={true} style={{ width: '100%' }} placeholder={'请选择用户角色'}>
                        <Option value="student">学生</Option>
                        <Option value="teacher">老师</Option>
                    </Form.Select></Col>
                </Row>
                <Row style={{ textAlign: 'center', marginBottom: '10px' }} className={style.rowStyle}>
                    {
                        isLogin ? (<Button htmlType="submit">{'登入'}</Button>) :
                            (<Button htmlType="submit">{'注册'}</Button>)
                    }
                </Row>
            </Section>
        </Form>
    )
}
export default LoginForm;