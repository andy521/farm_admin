<template>
  <!-- 全局 -->
  <div class="app-wrapper">
    <!-- 左侧 -->
    <div class="side-wrapper" >
      <!-- logo /-->
      <!-- 左侧菜单 -->
      <nav-bar>
        <Menu theme="dark">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
        </Menu>
      </nav-bar>
      <!-- 左侧菜单 /-->
    </div>
    <!-- 左侧 /-->

  </div>
  <!-- 全局 /-->
</template>

<script>
  import NavBar from './components/navbar/NavBar'
  import THeader from './components/header/THeader'

  export default {
    name: 'layout',
    components: {
      THeader,
      NavBar
    }
  }
</script>
