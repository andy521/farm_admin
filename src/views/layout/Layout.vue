<template>
  <!-- 全局 -->
  <div class="app-wrapper" :class="{hideSidebar:false}">
    <!-- 左侧 -->
    <div class="side-wrapper" :class="{hover:true}">
      <!-- logo -->
      <div style="height:50px;" class="logo-box">
        <img :src="require('@/assets/img/logo.png')" alt="" height="50">
      </div>
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
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"></Icon>
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="stats-bars"></Icon>
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </nav-bar>
      <!-- 左侧菜单 /-->
    </div>
    <!-- 左侧 /-->
    <!-- 主体 -->
    <div class="main-wrapper">
      <!-- 头部 -->
      <t-header>
        <!-- 用户信息 -->
        <Dropdown class="userBox" slot='right'>
          <a href="javascript:void(0)">
            Sysadmin
            <Icon type="arrow-down-b"></Icon>
          </a>
          <Dropdown-menu slot="list">
            <Dropdown-item>个人信息</Dropdown-item>
            <Dropdown-item>退出登录</Dropdown-item>
            <Dropdown-item>锁定屏幕</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
      </t-header>
    </div>

  </div>
  <!-- 全局 /-->
</template>

<script>
  import NavBar from '@/components/navbar/NavBar'
  import THeader from '@/components/header/THeader'

  export default {
    name: 'layout',
    components: {
      THeader,
      NavBar
    }
  }
</script>
