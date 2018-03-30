import Mock from 'mockjs'
import loginAPI from './login'
import resources from './resources'

// 登录相关
Mock.mock(/\/login/, 'post', loginAPI.loginByUsername)

// 获取菜单
Mock.mock(/\/resources\/menu/, 'post', resources.getMenu)

export default Mock
