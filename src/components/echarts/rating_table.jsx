import React from 'react';
import { Table } from '@douyinfe/semi-ui';

const RatingTable = ({ data }) => {
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
            title: '评分',
            dataIndex: 'rating',

        }
    ];
    console.log('data数据测试', data)

    return <Table columns={columns} dataSource={data}
        scroll={{ y: 400 }}
        pagination={false} resizable bordered />;
}

export default RatingTable;