import * as React from 'react';
import { Form, Row, Col, Button, Typography } from '@douyinfe/semi-ui';
import { useState } from 'react';
import style from './login.module.css';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import LoginForm from './loginform'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router-dom";
const Login = (props) => {
    const { Title } = Typography;
    const [isLogin, setIsLogin] = useState(true);
    const tabLogin = () => {
        setIsLogin(!isLogin);
    }
    return (
        <div className={style.bg}>
            <Title className={style.titleStyle}>{'移动终端编程技术课程知识点学习及分析系统'}</Title>
            <Tabs type="button" onChange={tabLogin} className={style.tabStyle}>
                <TabPane tab={"登入"} itemKey="1">
                    <LoginForm props={props} isLogin={isLogin} />
                </TabPane>
                <TabPane tab="注册" itemKey="2">
                    <LoginForm props={props} isLogin={isLogin} />
                </TabPane>
            </Tabs>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(withRouter(Login));