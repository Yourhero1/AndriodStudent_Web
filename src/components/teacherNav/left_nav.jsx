import React from 'react';
import { Nav, Avatar, Dropdown, Layout, Button } from '@douyinfe/semi-ui';
import { IconUserGroup, IconEdit } from '@douyinfe/semi-icons';
// 首部导航条左侧内容
const LeftNav = (props) => {
    const items = [
        {
            itemKey: 'konwledge_description',
            text: '知识点讨论次数',
            icon: <IconUserGroup />,
        },
        {
            itemKey: 'konwledge_rating',
            text: '知识点评分',
            icon: <IconUserGroup />,
        },
        {
            itemKey: 'konwledge_number',
            text: '知识点观看次数',
            icon: <IconUserGroup />,
        },
        {
            itemKey: 'student_mg',
            text: '学生管理',
            icon: <IconUserGroup />,
        },
        {
            itemKey: 'student_time',
            text: '学生在线时长',
            icon: <IconUserGroup />,
        }
        
    ]
    const handleClick = (e)=>{
        props.handleState(e.itemKey)
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

export default LeftNav;