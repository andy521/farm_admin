// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'

import { MenuGroup, Menu, Submenu, Icon, MenuItem, Tooltip, Dropdown , DropdownItem, DropdownMenu} from 'iview'

Vue.component('MenuGroup', MenuGroup)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
Vue.component('Submenu', Submenu)
Vue.component('Dropdown', Dropdown)
Vue.component('DropdownItem', DropdownItem)
Vue.component('DropdownMenu', DropdownMenu)
Vue.component('Tooltip', Tooltip)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
