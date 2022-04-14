import React from 'react';
import { Table } from '@douyinfe/semi-ui';

const DescriptionTable = ({ data }) => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'username',
        },
        {
            title: '知识点',
            dataIndex: 'navValue',
        },
        {
            title: '讨论内容',
            dataIndex: 'description',

        }
    ];
    console.log('data数据测试', data)
    return <Table columns={columns} dataSource={data}
        scroll={{ y: 280 }}
        pagination={false} resizable bordered />;
}

export default DescriptionTable;