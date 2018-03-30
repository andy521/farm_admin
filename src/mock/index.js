import Mock from 'mockjs'
import loginAPI from './login'
import resourcesAPI from './resources'

// 登录相关
Mock.mock(/\/login/, 'post', loginAPI.loginByUsername)

// 获取用户信息
Mock.mock(/\/menu/, 'get', loginAPI.getUserInfo)

// 获取菜单
Mock.mock(/\/resources\/menu/, 'get', resourcesAPI.getMenu)

export default Mock
