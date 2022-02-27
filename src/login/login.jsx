import * as React from 'react';
import {Form,Row,Col,Button} from '@douyinfe/semi-ui';
import style from './login.module.css';
export const Login = () =>{
    const {Option} = Form.Select;
    const {Label,Section} = Form;
    return (
        <Form layout='horizontal'  onValueChange={values=>console.log(values)} className={style.bg} style={{padding:10,width:'100%'}}>
            <Section text={'登入页面'}>
            <Row>
            <Col span={6}><Label text='用户名' required={true}></Label></Col>
            <Col span={18}><Form.Input field='UserName' label='用户名' noLabel={true} /></Col>
            </Row>
            <Row>
                <Col span={6}><Label text='密码' required={true}></Label></Col>
                <Col span={18}><Form.Input field='Password' label={{ text: '密码'}} noLabel={true} /></Col>
            </Row>
            <Row>
            <Form.Select field="Role" label='角色' style={{width:176}}>
                <Option value="student">学生</Option>
                <Option value="teacher">老师</Option>
            </Form.Select>
            </Row>
            <Button>{'登入'}</Button>
            </Section>
        </Form>
    )
}