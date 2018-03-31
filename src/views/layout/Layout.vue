<template>
  <!-- 全局 -->
  <div class="app-wrapper">
    <!-- 左侧 -->
    <div class="side-wrapper">
      <!-- logo /-->
      <!-- 左侧菜单 -->
      <nav-bar>
        <Menu theme="dark" @on-select="selectFn" :active-name="$route.path">
          <div v-for="(item, index) in permission_routers" :key="index">
            <Submenu :name="index" v-if="item.children && item.children.length > 0 && !item.hidden">
                <template slot="title">{{item.title}}</template>
              <MenuItem :name="item.path" v-if="!item.hidden">{{item.title}}</MenuItem>
            </Submenu>
            <!--<MenuItem :name="item.path" v-if="(item.children && item.children.length == 0) || !item.hidden">{{item.title}}</MenuItem>-->
          </div>
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
  import { mapGetters } from 'vuex'

  export default {
    name: 'layout',
    components: {
      THeader,
      NavBar
    },
    methods: {
      selectFn (path) {
        this.$router.push({
          path: path
        })
      }
    },
    computed: {
      ...mapGetters([
        'permission_routers'
      ]),
      isCollapse () {
        return !this.sidebar.opened
      }
    }
  }
</script>
