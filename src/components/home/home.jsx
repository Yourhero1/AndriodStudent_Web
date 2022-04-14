import React, { Component, useState, useEffect } from 'react';
import {Layout} from '@douyinfe/semi-ui';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Empty,Rating } from '@douyinfe/semi-ui';
import * as actions from '../../actions/actions'
import store from '../../index'
import LeftNav from '../nav/left-nav';
import TopNav from '../nav/top-nav';
import Feedback from '../feedback/feedback'

import {reportData} from '../../constants/reportData'

import DescribeTechnology from '../content/describe_technology';
import DescribeFeature from '../content/describe_feature';
import AndroidEnv from '../content/android_env';
import FlutterEnv from '../content/flutter_env';
//import PageContent from './PageContent'
const Home = (props) => {
    const { auth } = store.getState();
    const { user } = auth;
    console.log('user',user)
    const { Header, Footer, Sider, Content } = Layout;
    const [navValue, setNavValue] = useState('describe_technology');
    const handleState = (value) => {
        console.log('测试数据！')
        setNavValue(value);
    }
    
    // 页面曝光事件监听
    useEffect(()=>{
        reportData(user.username)
    },[])

    let PageContent = <DescribeTechnology/>;
    switch (navValue) {
        case 'describe_technology': PageContent = ()=><DescribeTechnology/>;break;
        case 'describe_feature': PageContent = ()=><DescribeFeature/>;break;
        case 'android_env': PageContent = ()=><AndroidEnv/>;break;
        case 'flutter_env': PageContent = ()=><FlutterEnv/>;break;
        // case 'project_apply': PageContent = ()=><ProjectApply/>;break;
        // case 'project_ls': PageContent = ()=><ProjectLs/>;break;
        // case 'project_resources': PageContent = ()=><ProjectResources/>;break;
        // case 'project_during': PageContent = ()=><ProjectDuring/>;break;
        default:PageContent = ()=><Empty/>;break;
    }

    return (
        <Layout className="components-layout-demo">
            <TopNav props={props} />
            <Layout>
                <Sider><LeftNav handleState={handleState} /></Sider>
                <Content>
                    <PageContent navValue={navValue}/>
                    <Feedback navValue={navValue}/>
                </Content>
            </Layout>
        </Layout>
    )
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(null, mapDispatchToProps)(withRouter(Home));  