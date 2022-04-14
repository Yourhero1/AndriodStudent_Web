import React from 'react';
import { Table } from '@douyinfe/semi-ui';

const DurationTable = ({ data }) => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'username',
        },
        {
            title: '事件类型',
            dataIndex: 'event_type',
        },
        {
            title: '平均在线时长',
            dataIndex: 'stayTime',

        },
        {
            title:'日期',
            dataIndex: 'date',
        }
    ];
    console.log('data数据测试', data)

    return <Table columns={columns} dataSource={data}
        scroll={{ y: 400 }}
        pagination={false} resizable bordered />;
}

export default DurationTable;