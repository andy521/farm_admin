import { getUserInfo } from '@/api/login'

const user = {
  state: {
    name: ''
  },

  mutations: {
    SET_NAME: (state, userName) => {
      state.name = userName
    }
  },

  actions: {
    // 获取用户信息
    GetUserInfo ({commit}) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          if (response.status === 0) {
            commit('SET_NAME', response.userName)
            resolve(response)
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

export default user
