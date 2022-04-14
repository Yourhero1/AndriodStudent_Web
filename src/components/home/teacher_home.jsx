import React,{useState} from 'react';
import {Layout} from '@douyinfe/semi-ui';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Empty,Rating } from '@douyinfe/semi-ui';
import * as actions from '../../actions/actions'
import store from '../../index'
import LeftNav from '../teacherNav/left_nav';
import TopNav from '../teacherNav/top_nav';

import RatingEcharts from '../echarts/rating_echarts'
import DescriptionEcharts from '../echarts/description_echarts'
import NumberEcharts from '../echarts/number_echarts'
import StudentMG from '../echarts/student_mg'
import StudentTime from '../echarts/duration_echarts'

const TeacherHome = (props) => {
    const { Sider, Content } = Layout;
    const [navValue, setNavValue] = useState('konwledge_description');
    const handleState = (value) => {
        console.log('测试数据！')
        console.log(value);
        setNavValue(value);
    }
    let Echarts;
    switch(navValue){
        case 'konwledge_description': Echarts = ()=><DescriptionEcharts  props={props} />;break;
        case 'konwledge_rating': Echarts =()=> <RatingEcharts  props={props}/>;break;
        case 'konwledge_number': Echarts = ()=> <NumberEcharts props={props} />;break;
        case 'student_mg': Echarts = () => <StudentMG props={props} />;break;
        case 'student_time': Echarts = () => <StudentTime props={props} />;break;
        default:Echarts = ()=><Empty/>;break;
    }

    return (
        <Layout className="components-layout-demo">
            <TopNav props={props}/>
            <Layout>
                <Sider><LeftNav handleState={handleState} /></Sider>
                <Content>
                 <Echarts/>
                </Content>
            </Layout>
        </Layout>
    )
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(null, mapDispatchToProps)(withRouter(TeacherHome));  