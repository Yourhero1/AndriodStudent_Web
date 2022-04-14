import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import _ from 'lodash';
import { echartData,descriptionList } from '../../constants/constants';
import DescriptionTable from './description_table'
let data;
const DescriptionEcharts = ({ props }) => {
    const [dataList,setDataList] = useState();
    useEffect(()=>{
        let valueList = _.cloneDeep(descriptionList);
        props.actions.getDescription().then((res)=>{
            data =res.data;
            data.forEach(e =>{
                valueList[e.navValue]?.push(e.description);
            })
            console.log('valueList',valueList);
            setDataList(valueList);
        })
    },[])
    console.log('dataList',dataList);
    let size  = [];
    if(dataList){
      let array = Object.values(dataList);
      array.forEach((e)=>{
        size.push(e.length);
    })
    }
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
                data: size,
                type: 'bar'
            }
        ]
    };

    return <div>
        <ReactECharts option={options} />
        <DescriptionTable data={data} />
    </div>;
};

export default DescriptionEcharts;