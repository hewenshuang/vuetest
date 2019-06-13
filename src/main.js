// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios';
import Vuex from 'vuex'

Vue.prototype.$myAxios = axios;  //把axios挂载到vue上，$myAxios这个名称可以自定义
Vue.use(VueAxios,axios);
Vue.use(Vuex)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
