import axios from 'axios'
import qs from 'qs'

const IP = 'http://127.0.0.1:80'

// 登录请求 参数 acc账号  pwd密码
export function getLogin(acc, pwd) {
    return axios.post( IP+'/login.php', qs.stringify({acc,pwd}))
}

// 注册请求
export function getReg(acc, pwd) {
    return axios.post( IP + '/reg.php', qs.stringify({acc, pwd}))
}

// 房源信息请求
export function getHouselist() {
    return axios.post( IP + '/gethouselist.php', qs.stringify())
}