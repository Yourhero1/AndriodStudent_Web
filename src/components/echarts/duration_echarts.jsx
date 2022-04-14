import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import _ from 'lodash';
import DurationTable from './duration_table';

let data;
const StudentTime = ({ props }) => {
    const [dataList, setDataList] = useState();
    useEffect(() => {
        props.actions.getDuration().then((res) => {
            let durationData = {};
            data = res.data;
            data.forEach(e => {
                if (!durationData[e.username]) {
                    durationData[e.username] = [];
                }
                durationData[e.username].push(e.stayTime)
            })
            console.log('durationData', durationData);
            //debugger
            setDataList(durationData);
        })
    }, [])
    let average = [];
    let XData = [];
    if (dataList) {
        console.log('dataList', dataList);
        let array = Object.values(dataList);
        console.log('average', array);
        XData = Object.keys(dataList);
        array.forEach((e) => {
            average.push( _.sum(e));
        })
    }
    const options = {
        title: {
            text: '学生在线时长统计'
        },
        xAxis: {
            name: '学生名称',
            type: 'category',
            data: XData,
            axisLabel: {
                interval: 0,
                rotate: -50
            }
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: average,
                type: 'line',
                smooth: true,
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    return <div>
        <ReactECharts option={options} />
        <DurationTable data={data} />
    </div>;
};

export default StudentTime;