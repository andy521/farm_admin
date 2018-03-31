<template>
  <div>
    <Modal :value="true" width="360" :closable="false" :mask-closable="false">
      <div>
        <H1 style="color:#abcdef;text-align:center; margin-bottom: 40px"> 智慧农业物联网平台 </H1>
        <Form ref="loginForm" :model="loginForm" :rules="loginRules">
          <FormItem prop="userName">
            <Input v-model="loginForm.userName" placeholder="用户名"/>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="密码"/>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long @click="handleSubmit('loginForm')" :loading="loginLoading">登录</Button>
        <Button type="success" size="large" style="margin-top: 15px">注册</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import { loginByUsername } from '@/api/login'
  import { setToken } from '@/utils/auth'
  export default {
    name: 'login',
    data () {
      return {
        loginLoading: false,
        loginForm: {
          userName: '',
          password: ''
        },
        loginRules: {
          userName: [
            {required: true, message: '用户名不能为空', trigger: 'blur'},
            {message: '用户名长度不能超过15个字符', trigger: 'blur', max: 15},
            {message: '用户名长度不得少于6个字符', trigger: 'blur', min: 6}
          ],
          password: [
            {message: '密码不能为空', trigger: 'blur', required: true},
            {message: '密码长度不能超过15个字符', trigger: 'blur', max: 15},
            {message: '密码长度不得少于6个字符', trigger: 'blur', min: 6}
          ]
        }
      }
    },
    methods: {
      // login
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.loginLoading = true
            loginByUsername(this.loginForm).then(response => {
              this.$Message.success(response.msg)
              if (response.status === 0) {
                setToken(response.token)
              } else {
                this.$Message.success(response.msg)
              }
              this.$router.push('/')
            }).catch((error) => {
              this.$Message.error(error)
              this.loginLoading = false
            })
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }
</script>
