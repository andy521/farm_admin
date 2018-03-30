import { param2Obj } from '@/utils'

const userMap = {
  sysadmin: {
    token: 'sysadmin',
    introduction: '超级管理员',
    userName: 'sysadmin'
  },
  editor: {
    token: 'editor',
    introduction: '普通管理员',
    userName: 'Normal Editor'
  }
}

export default {
  loginByUsername: config => {
    const {userName} = JSON.parse(config.body)
    const userInfo = userMap[userName]
    if (userInfo) {
      return {
        token: userInfo['token'],
        msg: '登入成功',
        status: 0
      }
    }
    return {
      status: 400,
      msg: '登入失败'
    }
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  }
}
