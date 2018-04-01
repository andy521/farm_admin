const asyncRouterMap = [
  {
    resourceUrl: '/dashboard',
    status: 0
  },
  {
    resourceUrl: '/sys',
    status: 0,
    children: [
      {
        resourceUrl: '/resources',
        status: 0
      },
      {
        resourceUrl: '/roles',
        status: 0
      },
      {
        resourceUrl: '/users',
        status: 0
      }
    ]
  },
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
