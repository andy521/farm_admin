import {loginByUsername, getUserInfo} from '@/api/login'
import {setToken} from '@/utils/auth'

const user = {
  state: {
    userName: ''
  },

  mutations: {
    SET_USER_NAME: (state, userName) => {
      state.userName = userName
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({commit}, userInfo) {
      const userName = userInfo.userName.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(userName, userInfo.password).then(response => {
          if (response.status === 0) {
            setToken(response.token)
            resolve(response)
          } else {
            reject(response.msg)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          if (response.status === 0) {
            commit('SET_USER_NAME', response.userName)
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
