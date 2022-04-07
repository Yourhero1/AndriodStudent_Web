import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import _ from 'lodash';
import { echartData,ratingList } from '../../constants/constants';

const NumberEcharts = ({props}) =>{
    const [dataList,setDataList] = useState();
    useEffect(()=>{
        let valueList = _.cloneDeep(ratingList);
        props.actions.getNavNumber().then((res)=>{
            const data =res.data;
            console.log(data);
            data.forEach(e =>{
                valueList[e.navName] = e.number;
            })
            console.log('valueList',valueList);
            setDataList(valueList);
        })
    },[])
    console.log('dataList',dataList);
    const options = {
        title:{
            text:'知识点讨论次数'
        },
        xAxis: {
            type: 'category',
            data: echartData,
            axisLabel: {
                interval: 0,
                rotate: -50
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: dataList?Object.values(dataList):[],
                type: 'bar'
            }
        ]
    };

    return <div>
        <ReactECharts option={options} />
    </div>;
}

export default NumberEcharts;