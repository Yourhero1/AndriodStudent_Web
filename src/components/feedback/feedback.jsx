import React, { useState } from 'react';
import { Typography, Button, Modal, SideSheet, Form, Col, Notification, Space, Row } from '@douyinfe/semi-ui';
import style from './feedback.module.css'
import VirtualizedScroll from './listData'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router-dom";
import * as actions from '../../actions/actions'
import store from '../../index';

const Feedback = (props) => {
    const { Text } = Typography;
    const { TextArea, Rating } = Form;
    const [visible, setVisible] = useState(false);
    const [visibleRating, setVisibleRating] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [formApi, setFormApi] = useState();
    const [formApiRating, setFormApiRating] = useState();
    const [dataList, setDataList] = useState([]);
    const { auth } = store.getState();
    const { user } = auth;
    const username = user.username;
    const navValue = props.navValue;
    console.log('navValue',navValue);
    const showDialog = () => {
        setVisible(true);
    }
    const showDialogRating = ()=> {
        setVisibleRating(true);
    }

    const handleOk = () => {
        let value = formApi.getValues();
        const { description } = value;
        console.log(username);
        props.actions.handleDescription({ username,  description,navValue }).then(
            (res) => {
                console.log(res);
                Notification.success({ content: '提交成功！', duration: 3 })
            }, err => console.log(err))
        console.log(formApi.getValues());
        setVisible(false);
    }

    const handleOkRating = () =>{
        let value = formApiRating.getValues();
        const { rating } = value;
        console.log(username);
        props.actions.handleRating({ username, rating,navValue}).then(
            (res) => {
                console.log(res);
                Notification.success({ content: '提交成功！', duration: 3 })
            }, err => console.log(err))
        setVisibleRating(false);
    }

    const handleCancel = () => {
        setVisible(false);
    }

    const handleCancelRating = () =>{
        setVisibleRating(false);
    }

    const handleSidelbar = () => {
        props.actions.getDescription().then(res => {
            setDataList(res.data);
            setSidebar(!sidebar);
        }, err => {
            Notification.error({ content: '获取数据失败！', duration: 3 });
        })
    }

    const getFormApiRating = (e) => {
        setFormApiRating(e);
    }
    const getFormApi = (e) => {
        setFormApi(e)
    }
    return (
        <div className={style.main}>
            <Button theme='solid' type='primary' style={{ marginRight: 8 }} onClick={showDialogRating}>{'提交评分'}</Button>
            <Modal
                title="评分"
                visible={visibleRating}
                onOk={handleOkRating}
                onCancel={handleCancelRating}
            >
                <Form getFormApi={getFormApiRating}>
                    <Row>
                        <Rating field="rating" label="评分(Rating)" defaultValue={5} />
                    </Row>
                </Form>
            </Modal>
            <Button theme='solid' type='primary' style={{ marginRight: 8 }} onClick={showDialog}>{'提交评价'}</Button>
            <Modal
                title="评价"
                visible={visible}
                onOk={handleOk} //>=1.16.0
                onCancel={handleCancel}
            >
                <Form getFormApi={getFormApi}>
                    <Row>
                        <TextArea field='description'
                            label="讨论信息"
                            autosize maxCount={500}
                            placeholder='请填写评价信息' />
                    </Row>
                </Form>
            </Modal>
            <Button theme='solid' type='primary' style={{ marginRight: 8 }} onClick={handleSidelbar}>{'讨论区'}</Button>
            <SideSheet title='讨论区' visible={sidebar} onCancel={handleSidelbar}>
                <VirtualizedScroll dataList={dataList} />
            </SideSheet>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(withRouter(Feedback));