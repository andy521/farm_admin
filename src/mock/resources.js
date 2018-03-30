import {param2Obj} from '@/utils'

const userMap = {
  sysadmin: [
    {
      resourceUrl: '/info'
    },
    {
      resourceUrl: '/roles/role'
    }
  ],
  editor: [
    {
      resourceUrl: '/info'
    }
  ]
}

export default {
  getMenu: config => {
    const {token} = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return {
        status: 400
      }
    }
  }
}
