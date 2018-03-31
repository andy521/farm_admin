const asyncRouterMap = [
  {
    resourceUrl: '/dashboard',
    resourceName: '首页',
    status: 0
  },
  {
    resourceUrl: '/sys',
    resourceName: '系统设置',
    status: 0,
    children: [
      {
        resourceUrl: '/resources',
        resourceName: '资源管理',
        status: 0
      },
      {
        resourceUrl: '/roles',
        resourceName: '角色管理',
        status: 0
      },
      {
        resourceUrl: '/users',
        resourceName: '用户管理',
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
