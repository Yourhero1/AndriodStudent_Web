import React, {useEffect,useState} from 'react';
import ReactECharts from 'echarts-for-react';
import _ from 'lodash';
import RatingTable from './rating_table';
import { echartData,descriptionList } from '../../constants/constants';

let data;
const RatingEcharts = ({props}) => {
    const [dataList,setDataList] = useState();
    useEffect(()=>{
        let valueList = _.cloneDeep(descriptionList);
        props.actions.getRating().then((res)=>{
            data =res.data;
            console.log(data);
            data.forEach(e =>{
                valueList[e.navValue]?.push(e.rating);
            })
            setDataList(valueList);
        })
        console.log('数据测试')
    },[]) 
    console.log('dataList',dataList);
    let average  = [];
    if(dataList){
      let array = Object.values(dataList);
      array.forEach((e)=>{
        average.push(e.length?_.sum(e)/e.length:_.sum(e));
    })
    }
    const options = {
        title: {
            text: '评分平均值统计'
        },
        xAxis: {
            name: '知识点名称',
            type: 'category',
            data: echartData ,
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
                data:average,
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
        <RatingTable data={data}/>
    </div>;
};

export default RatingEcharts;