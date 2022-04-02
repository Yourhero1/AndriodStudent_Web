import React from 'react';
import {Layout} from '@douyinfe/semi-ui';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Empty,Rating } from '@douyinfe/semi-ui';
import * as actions from '../../actions/actions'
import store from '../../index'
import LeftNav from '../teacherNav/left_nav';
import TopNav from '../teacherNav/top_nav';

const TeacherHome = (props) => {
    const { Header, Footer, Sider, Content } = Layout;

    return (
        <Layout className="components-layout-demo">
            <TopNav props={props}/>
            <Layout>
                <Sider><LeftNav /></Sider>
                <Content>
                    <Empty/>
                </Content>
            </Layout>
        </Layout>
    )
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(null, mapDispatchToProps)(withRouter(TeacherHome));  