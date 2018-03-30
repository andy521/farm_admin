<template>
  <div class="header">
    <!-- 伸缩按钮 -->
    <div class="nav-icon">
      <Icon type="navicon-round"></Icon>
    </div>
    <!-- 伸缩按钮 /-->
    <!--是否全屏  -->
    <div class="expand-screen">
      <Tooltip placement="bottom" content="全屏">
        <Icon type="android-expand" v-if="!screen"></Icon>
        <Icon type="android-contract" v-if="screen"></Icon>
      </Tooltip>
    </div>
    <!--是否全屏  /-->
    <!-- 消息类按钮 -->
    <div class="msg-group-box">
      <slot name='msg-icon'></slot>
      <slot name='right'></slot>
    </div>

    <!-- 消息类按钮 /-->
  </div>
</template>

<script>
  export default {
    name: 'THeader',
    data () {
      return {screen: false}
    },
    methods: {}
  }
</script>

<style>
  .msg-group-box {
    float: right
  }
</style>

