import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import moment from 'moment';


import 'view-design/dist/styles/iview.css'

import { Layout, Header, Menu, Submenu,Scroll, List, ListItemMeta, Spin, MenuItem,
  Input, Button,ButtonGroup,  Dropdown, DropdownMenu, Table, Sider,
  Breadcrumb, BreadcrumbItem, Content, Icon, Row, Col, Split, 
  Form, FormItem, Card, Modal, Drawer, DatePicker, Message, 
  Checkbox, CheckboxGroup, RadioGroup, Radio, Switch, Select, Option,
  Collapse, Panel, Tree, TimePicker, Tag, Tabs, TabPane, Divider,Tooltip,Page
} from 'view-design';



// 本地化，中文时间显示
moment.locale('zh-cn');
Vue.prototype.moment = moment;


Vue.config.productionTip = false

Vue.component('Layout', Layout);
Vue.component('Header', Header);
Vue.component('Menu', Menu);
Vue.component('Submenu', Submenu);
Vue.component('MenuItem', MenuItem);
Vue.component('Button', Button);
Vue.component('Spin',   Spin);
Vue.component('Dropdown',   Dropdown);
Vue.component('DropdownMenu',   DropdownMenu);
Vue.component('Table', Table);
Vue.component('Sider', Sider);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.component('Content', Content);
Vue.component('Icon', Icon);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Split', Split);
Vue.component('Scroll', Scroll);
Vue.component('ButtonGroup', ButtonGroup);
Vue.component('ListItem', List.Item);
Vue.component('ListItemMeta', ListItemMeta);
Vue.component('Input', Input);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Card', Card);
Vue.component('List', List);
Vue.component('Modal', Modal);
Vue.component('Drawer', Drawer);
Vue.component('DatePicker', DatePicker);
Vue.component('Checkbox', Checkbox);
Vue.component('CheckboxGroup', CheckboxGroup);
Vue.component('Radio', Radio);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Switch', Switch);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('Collapse', Collapse);
Vue.component('Tree', Tree);
Vue.component('Panel', Panel);
Vue.component('TimePicker', TimePicker);
Vue.component('Tag', Tag);
Vue.component('Tabs', Tabs);
Vue.component('TabPane', TabPane);
Vue.component('Divider', Divider);
Vue.component('Page', Page)
Vue.component('Tooltip', Tooltip)
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
