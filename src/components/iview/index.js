import Vue from 'vue'
import '@/assets/styles/iview.less'
import { Message } from 'iview'

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
  Page,
  Table,
  Tag,
  Select,
  ButtonGroup,
  Option,
  Avatar,
  Layout,
  Sider,
  Content,
  Header,
  Card,
  Breadcrumb,
  BreadcrumbItem,
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
Vue.component('Page', Page)
Vue.component('Table', Table)
Vue.component('Tag', Tag)
Vue.component('Option', Option)
Vue.component('Select', Select)
Vue.component('ButtonGroup', ButtonGroup)
Vue.component('Avatar', Avatar)
Vue.component('Layout', Layout)
Vue.component('Sider', Sider)
Vue.component('Header', Header)
Vue.component('Content', Content)
Vue.component('Card', Card)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('BreadcrumbItem', BreadcrumbItem)
