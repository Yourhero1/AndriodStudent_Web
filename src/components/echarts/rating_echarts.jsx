import React, {useEffect,useState} from 'react';
import ReactECharts from 'echarts-for-react';
import _ from 'lodash';
import { echartData,ratingList } from '../../constants/constants';

const RatingEcharts = ({props}) => {
    const [dataList,setDataList] = useState();
    useEffect(()=>{
        let valueList = _.cloneDeep(ratingList);
        props.actions.getRating().then((res)=>{
            const data =res.data;
            data.forEach(e =>{
                valueList[e.navValue] = e.rating;
            })
            setDataList(valueList);
        })
        console.log('数据测试')
    },[])
    console.log('dataList',dataList);
    const options = {
        title: {
            text: '评分统计'
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
                data:dataList?Object.values(dataList):[],
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
    </div>;
};

export default RatingEcharts;