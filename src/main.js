import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import moment from 'moment';


import 'view-design/dist/styles/iview.css'
import { Input, Button } from 'view-design';

Vue.config.productionTip = false

// moment.js 本地化，中文时间显示
moment.locale('zh-cn');
Vue.prototype.moment = moment;

// view-design
Vue.component('Input', Input);
Vue.component('Button', Button);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
