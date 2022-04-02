import React, { Component } from 'react';
import { Nav, Avatar, Dropdown, Layout, Button } from '@douyinfe/semi-ui';
import { IconStar, IconUser, IconUserGroup, IconSetting, IconEdit, IconLanguage } from '@douyinfe/semi-icons';
import store from '../../index';
// 首页导航条顶部内容
const TopNav = ({props}) => {
    const { auth } = store.getState();
    const { user } = auth;
    const loginOut = () => {
        props.actions.logOutAction();
        props.history.replace('/login');
    }
    return (
        <Nav
            mode={'horizontal'}
            onSelect={key => console.log(key)}
            header={{
                logo: <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />,
                text: '教师云平台'
            }}
            style={{height:'8vh'}}
            footer={
                <>
                    <Dropdown
                        position="bottomRight"
                        render={
                            <Dropdown.Menu>
                                <Dropdown.Item>详情</Dropdown.Item>
                                <Dropdown.Item onClick={loginOut}>退出</Dropdown.Item>
                            </Dropdown.Menu>
                        }
                    >
                        <Avatar size="small" color='light-blue' style={{ margin: 4 }}>{user.role === 'student' ? '学生' : '教师'}</Avatar>
                        <span>{user.username}</span>
                    </Dropdown>
                </>
            }
        />
    )
}

export default TopNav;