import axios from 'axios'
import { getCookie } from '@/utils/auth'


// 判断开发环境  配置base_url 前辍
const baseURL = process.env.NODE_ENV === 'development' ? '' : process.env.VUE_APP_BASE_API
// 设置axios请求默认配置
const serve = axios.create({
    baseURL,  // api的base_url前缀
    timeout: 1000 * 16  //请求超时
})

//  request 拦截器， 请求前的拦截器
serve.interceptors.request.use(
    config => {
        if(getCookie('token')) {
            config.headers.Authorization = getCookie('token')
        }
    }
)
