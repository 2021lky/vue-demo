import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use((config)=>{
    // 可以添加一些通用的请求配置
    return config;
}, (err) => {
    return Promise.reject(err);
})

// 响应拦截器
instance.interceptors.response.use((res)=>{
    // 可以添加一些通用的响应配置
    if(res.data.error == 0 || res.data.code == 0){
        return res.data.data;
    }else{
       return promise.reject(res.data.msg);
    }
}, (err) => {
    return Promise.reject(err);
})

export default instance;