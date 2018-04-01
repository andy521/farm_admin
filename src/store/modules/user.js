import { getUserInfo } from '@/api/login'

const user = {
  state: {
    name: '',
    email: '',
    avatar: '',
    status: 0
  },

  mutations: {
    SET_NAME: (state, userName) => {
      state.name = userName
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  },

  actions: {
    // 获取用户信息
    GetUserInfo ({commit}) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          if (response.status === 0) {
            commit('SET_NAME', response.data.userName)
            commit('SET_EMAIL', response.data.email)
            commit('SET_STATUS', response.data.status)
            commit('SET_AVATAR', response.data.avatar)
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
