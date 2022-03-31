import axios from 'axios';

const setToken = token => {
    if(token) {// 如果token存在，设置公共请求头
        axios.defaults.headers.common['Authorization'] =
        `mistrain ${token}`
        // Authorization 用于验证请求合法性的认证消息
    }else {
        delete axios.defaults.headers.common['Authorization']
    }
}
export default setToken;