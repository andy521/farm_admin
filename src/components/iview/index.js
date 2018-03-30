import Vue from 'vue'
import 'iview/dist/styles/iview.css'

import {Message} from 'iview'

import {
  MenuGroup,
  Menu,
  Submenu,
  Icon,
  MenuItem,
  Tooltip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Modal,
  Button,
  Form,
  FormItem,
  Input
} from 'iview'

Vue.prototype.$Message = Message
Vue.component('MenuGroup', MenuGroup)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
Vue.component('Submenu', Submenu)
Vue.component('Dropdown', Dropdown)
Vue.component('DropdownItem', DropdownItem)
Vue.component('DropdownMenu', DropdownMenu)
Vue.component('Tooltip', Tooltip)
Vue.component('Modal', Modal)
Vue.component('Button', Button)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
