<template>
    <div>
        <Menu theme="dark" accordion  @on-select="setRouter" width="180">
            <div v-for="(item, index) in permission_routers" :key="index">
                <!-- 有子项 -->
                <Submenu :name="item.resourceUrl" v-if="item.children && item.children.length>0 && !item.hidden">
                    <template slot="title"><Icon type="ios-paper"></Icon>{{item.resourceName}}</template>
                    <Menu-item :name="sub.resourceUrl" v-for="(sub,i) in item.children" :key="i" v-if="!sub.hidden">
                        <Icon type="ios-paper"></Icon>
                        {{sub.resourceName}}
                    </Menu-item>
                </Submenu>
                <!-- 无子项 -->
                <Menu-item :name="item.resourceUrl" :key="index" v-if="(!item.children || item.children.length==0) && !item.hidden">
                    <Icon type="ios-paper"></Icon>
                {{item.resourceName}}
              </Menu-item>
            </div>
         </Menu>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["permission_routers"]),
  },
  methods: {
      setRouter(p) {
      this.$router.push({
        path: p
      });
    }
  }
};
</script>

