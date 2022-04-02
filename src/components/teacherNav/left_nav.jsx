import React from 'react';
import { Nav, Avatar, Dropdown, Layout, Button } from '@douyinfe/semi-ui';
import { IconUserGroup, IconEdit } from '@douyinfe/semi-icons';
// 首部导航条左侧内容
const LeftNav = () => {
    const items = [
        {
            itemKey: 'konwledge-number',
            text: '知识点观看次数',
            icon: <IconUserGroup />,
        },
        {
            itemKey: 'konwledge-rating',
            text: '知识点评分',
            icon: <IconUserGroup />,
        },
        {
            itemKey: 'konwledge-description',
            text: '知识点讨论次数',
            icon: <IconUserGroup />,
        },
    ]
    return (
        <Nav
            limitIndent={false}
            bodyStyle={{ height: '80vh' }}
            items={items}
            // onSelect={key => props.handleState(key.itemKey)}
            //onClick={handleClick}
            footer={{
                collapseButton: true,
            }}
        />
    );
}

export default LeftNav;