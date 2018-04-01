<template>
  <div class="nav-wrapper">
    <Dropdown class="user-container">
      <a href="javascript:void(0)">
        <Avatar icon="person" :src="user_avatar" style="margin: 0 10px"/>
        {{user_name}}
        <Icon type="arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>个人信息</DropdownItem>
        <DropdownItem>修改密码</DropdownItem>
        <DropdownItem>注销登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['user_name', 'user_avatar'])
    }
  }
</script>


<style>
  .msg-group-box {
    float: right
  }
</style>
