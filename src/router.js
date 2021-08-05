import VueRouter from "vue-router";
import Vue from "vue";


import Chat from './components/Chat.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/chat', component: Chat },
  ]
  
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router;