import { getAsyncRouter } from '@/api/permission'

const permission = {
  state: {
    routers: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.routers = routers
    }
  },
  actions: {
    GenerateRoutes ({commit}) {
      return new Promise((resolve, reject) => {
        getAsyncRouter().then(response => {
          if (response.status === 0) {
            commit('SET_ROUTERS', response.data)
            resolve(response.data)
          } else {
            reject(response.msg)
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default permission
