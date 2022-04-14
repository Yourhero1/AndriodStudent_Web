import React, { useState, useEffect } from 'react';
import { Table, Avatar, Button, Empty, Typography, Notification } from '@douyinfe/semi-ui';
import { IconDelete } from '@douyinfe/semi-icons';
import { IllustrationNoResult, IllustrationNoResultDark } from '@douyinfe/semi-illustrations';

let data;
const StudentMG = ({ props }) => {

    const [dataSource, setData] = useState();

    useEffect(() => {
        props.actions.getStudentList().then((res) => {
            console.log('res的值', res)
            data = res.data;
            setData(data);
            console.log('测试学生信息列表', data);
        })
    }, [])
    const removeRecord = (record) => {
        console.log('record', record);
        let newDataSource = [...dataSource];
        if (record != null) {
            let idx = newDataSource.findIndex(data => data.username === record.username);
            let username = record.username;
            if (idx > -1) {
                props.actions.deleteStudent(username)
                    .then(res => {
                        newDataSource.splice(idx, 1);
                        setData(newDataSource);
                    },
                        err => Notification.error({ content: '删除失败', duration: 3 }))
            }
        }
    };

    const columns = [
        {
            title: '姓名',
            dataIndex: 'username',
        },
        {
            title: '角色',
            dataIndex: 'role',
        },
        {
            title: '操作',
            dataIndex: 'operate',
            render: (text, record) => <Button icon={<IconDelete />} theme='borderless' onClick={() => removeRecord(record)} />
        },
    ];

    const empty = (
        <Empty
            image={<IllustrationNoResult />}
            darkModeImage={<IllustrationNoResultDark />}
            description={'搜索无结果'}
        />
    );


    return (
        <>
            <Table style={{ minHeight: 350 }} columns={columns}
                dataSource={dataSource} pagination={false} empty={empty} />
        </>
    );
}
export default StudentMG;
