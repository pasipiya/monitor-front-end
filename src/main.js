import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import LogIn from "./components/LogIn.vue"
import Register from "./components/Register.vue"
import Navbar from "./components/Navbar.vue"

Vue.use(VueRouter);
Vue.component('monitor-nav', Navbar);

// eslint-disable-next-line no-unused-vars
const routes = [
  {path: '/',component:Home},
  {path: '/about', component: About},
  {path: '/login', component: LogIn},
  {path: '/register', component: Register}
]

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
