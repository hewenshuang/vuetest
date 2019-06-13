import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import appLayout from '../components/common/appLayout'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testComponents',
      component: appLayout
    }
  ]
})
