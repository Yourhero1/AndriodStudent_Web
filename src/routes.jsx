// 路由页面
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home';
import TeacherHome from './components/home/teacher_home'
export default class Routes extends Component {
    render() {
        return (
            <div className="container">
                <Route path={'/home'} component={Home} ></Route>
                <Route path={'/login'} component={Login} ></Route>
                <Route path={'/teacherHome'} component={TeacherHome} ></Route>
                {/*  路由不匹配，重定向到/login  */}
                <Redirect from='/' to='/login' />
            </div>
        )
    }
}