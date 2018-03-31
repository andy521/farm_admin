const asyncRouterMap = [
  {
    resourceUrl: '/',
    resourceName: '用户首页',
    status: 0
  },
  {
    resourceUrl: '/info',
    resourceName: '用户信息',
    status: 0
  },
  {
    resourceUrl: '/index',
    resourceName: '用户信息',
    status: 0
  }
]

export default {
  getMenu: () => {
    return {
      data: asyncRouterMap,
      msg: '获取成功',
      status: 0
    }
  }
}
