import axios from 'axios';
import {
    SET_CURRENT_USER,
    REMOVE_USER
} from '../constants/constants';
import setToken from '../utils/setToken'
import jwtDecode from 'jwt-decode';

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const removeUser = () => ({
    type: REMOVE_USER
})

// 登入
export const loginAction = data => dispatch =>{
    return axios.post('api/login',data).then(
        res => {
            // 前台拿到令牌,保存在localStorage里面
            const token = res.data;
            localStorage.setItem('jwtToken',token);
            setToken(token);
            dispatch(setCurrentUser(jwtDecode(token)));
        }
    )
}

//登出
export const logOutAction = () => dispatch => {
    console.log('1')
    localStorage.removeItem('jwtToken');
    setToken(false);
    dispatch(removeUser())
}

// 注册
export const signUpRequest = userData => dispatch =>{
    return axios.post('api/signUp',userData)
}

// 检查用户名是否重复 
export const checkUsername = username => dispatch =>{
    return axios.get(`api/signUp/${username}`)
}

// 提交评分
export const handleRating = rating => dispatch =>{
    return axios.post('api/rating',rating);
}

// 获取评分列表
export const getRating = () => dispatch =>{
    return axios.get('api/rating/getRating')
}

// 提交评论
export const handleDescription = description => dispatch =>{
    return axios.post('api/description',description);
}

// 获取评论列表
export const getDescription = () => dispatch =>{
    return axios.get('api/description/getDescription')
}

// 提交导航的点击次数
export const handleNav = value => dispatch => {
    return axios.post('api/nav',value);
}