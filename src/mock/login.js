export default {
  loginByUsername: config => {
    const { userName } = JSON.parse(config.body)
    if (userName === 'sysadmin') {
      return {
        token: 'token1',
        msg: '登入成功',
        status: 0
      }
    }
    return {
      msg: '登入失败',
      status: 1
    }
  },
  getUserInfo: () => {
    return {
      userName: 'sysadmin',
      msg: '获取成功',
      status: 0
    }
  }
}
