<template>
  <div>
    <h1 class="title">智慧农业物联网</h1>
    <div class="avatar-container">
      <img class="avatar" :src="user_avatar">
    </div>
    <div class="user">
      <h1>{{user_name}}</h1>
      <h2>{{user_email}}</h2>
    </div>
    <Menu theme="dark" accordion @on-select="setRouter" width="180">
      <div v-for="(item, index) in permission_routers" :key="index">
        <!-- 有子项 -->
        <Submenu :name="item.resourceUrl" v-if="item.children && item.children.length>0 && !item.hidden">
          <template slot="title">
            <Icon :type="item.resourceIcon"></Icon>
            {{item.resourceName}}
          </template>
          <Menu-item :name="sub.resourceUrl" v-for="(sub,i) in item.children" :key="i" v-if="!sub.hidden">
            <Icon :type="sub.resourceIcon "></Icon>
            {{sub.resourceName}}
          </Menu-item>
        </Submenu>
        <!-- 无子项 -->
        <Menu-item :name="item.resourceUrl" :key="index"
                   v-if="(!item.children || item.children.length==0) && !item.hidden">
          <Icon :type="item.resourceIcon"></Icon>
          {{item.resourceName}}
        </Menu-item>
      </div>
    </Menu>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(
        ['permission_routers',
          'user_name',
          'user_avatar',
          'user_email'
        ]
      )
    },
    methods: {
      setRouter (p) {
        this.$router.push({
          path: p
        })
      }
    }
  }
</script>

<style scoped>
  .title {
    color: aliceblue;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
  }

  .avatar-container {
    margin: 4px auto;
    width: 80px;
    height: 80px;
    background-size: 100%;
  }

  .avatar {
    width: 100%;
    height: 100%;
  }

  .user {
    color: aliceblue;
    margin: 10px;
  }
</style>

