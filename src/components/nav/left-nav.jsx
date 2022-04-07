import React, { Component } from 'react';
import { Nav, Avatar, Dropdown, Layout, Button } from '@douyinfe/semi-ui';
import { IconUserGroup, IconEdit } from '@douyinfe/semi-icons';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router-dom";
import store from '../../index';
const items = [
    {
        itemKey: 'android-describe',
        text: '移动应用概述',
        icon: <IconUserGroup />,
        items: [
            {
                itemKey: 'describe_technology',
                text: '移动应用开发技术'
            },
            {
                itemKey: 'describe_feature',
                text: 'Android特征和架构'
            },
            {
                itemKey: 'android_env',
                text: 'Android开发环境'
            },
            {
                itemKey: 'flutter_env',
                text: 'Flutter开发环境搭建'
            }
        ]
    },
    {
        itemKey: 'android_project',
        text: '移动应用程序',
        icon: <IconEdit />,
        items: [
            {
                itemKey: 'project_apply',
                text: '“Hello World”'
            },
            {
                itemKey: 'project_ls',
                text: 'Android工程目录',
            },
            {
                itemKey: 'project_resources',
                text: 'Android工程资源'
            },
            {
                itemKey: 'project_during',
                text: 'Android应用程序的生命周期'
            },
            {
                itemKey: 'project_review',
                text: 'Android应用程序的调试和发布'
            }
        ]
    },
    {
        itemKey: 'android-ui',
        text: '移动应用UI控件',
        icon: <IconEdit />,
        items: [
            {
                itemKey: 'ui_page',
                text: 'Android用户界面框架',
            },
            {
                itemKey: 'ui_text',
                text: 'Android文本控件使用',
            },
            {
                itemKey: 'ui_button',
                text: 'Android按钮控件使用'
            },
            {
                itemKey: 'ui_select',
                text: 'Android选择框控件使用'
            },
            {
                itemKey: 'ui_listview',
                text: 'ListView组件应用'
            }
        ]
    },
    {
        itemKey: 'android-layout',
        text: '移动应用界面布局',
        icon: <IconEdit />,
        items: [
            {
                itemKey: 'layout_component',
                text: 'Android布局组件',
            },
            {
                itemKey: 'layout_common1',
                text: 'Android常用布局(1)',
            },
            {
                itemKey: 'layout_common2',
                text: 'Android常用布局(2)'
            }
        ]
    },
    {
        itemKey: 'android-component',
        text: 'Android组件应用',
        icon: <IconEdit />,
        items: [
            {
                itemKey: 'component_create',
                text: 'Activity的创建'
            },
            {
                itemKey: 'component_during1',
                text: 'Activity的生命周期(1)'
            },
            {
                itemKey: 'component_during2',
                text: 'Activity的生命周期(2)'
            },
            {
                itemKey: 'component_use',
                text: 'Intent概述及使用'
            },
            {
                itemKey: 'component_data',
                text: 'Activity数据传递和回传'
            }
        ]
    },
    {
        itemKey: 'android-server',
        text: 'Service服务的应用',
        icon: <IconEdit />,
        items: [
            {
                itemKey: 'server_base',
                text: 'Service基础'
            },
            {
                itemKey: 'server_during1',
                text: 'Service启动和生命周期(1)'
            },
            {
                itemKey: 'server_during2',
                text: 'Service启动和生命周期(2)'
            }
        ]
    },
    {
        itemKey: 'android-event',
        text: 'Android的事件和广播',
        icon: <IconEdit />,
        items: [
            {
                itemKey: 'event_spread',
                text: 'Android广播'
            },
            {
                itemKey: 'event_solve',
                text: 'Android事件处理'
            }
        ]
    },
    {
        itemKey: 'android-sql',
        text: 'Android数据存储',
        icon: <IconEdit />,
        items: [
            {
                itemKey: 'sql_opreate',
                text: 'SharedPreferences'
            },
            {
                itemKey: 'sql_file',
                text: 'Android文件操作'
            },
            {
                itemKey: 'sql_lite',
                text: 'SQLite存储'
            }
        ]
    }
]

// 首部导航条左侧内容
const LeftNav = (props) => {
    const { auth } = store.getState();
    const { user } = auth;
    const username = user.username;
    const handleClick = (e) => {
        // console.log(e.itemKey);
        props.handleState(e.itemKey)
        props.actions.handleNav({ username, navName: e.itemKey }).then((res) => {
            console.log('埋点数据上传成功！')
        }, err => {
            console.log('埋点数据上床失败！')
        })
    }
    return (
        <Nav
            limitIndent={false}
            bodyStyle={{ height: '80vh' }}
            items={items}
            onClick={handleClick}
            footer={{
                collapseButton: true,
            }}
        />
    );
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(withRouter(LeftNav));