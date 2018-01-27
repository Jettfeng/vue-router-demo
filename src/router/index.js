import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import index1 from '@/components/index1'
import index2 from '@/components/index2'
import index11 from '@/components/index11'
import index12 from '@/components/index12'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/index1',
      children:[
        {
          path: '/index1',
          name: 'index1',
          component: index1,
          redirect:'/index1/index12',
          children:[
            {
              path: '/index1/index11',
              name: 'index11',
              component: index11,
            },
            {
              path: '/index1/index12',
              name: 'index12',
              component: index12,
            }
          ]
        },
        {
          path: '/index2',
          name: 'index2',
          component: index2
        }
      ]
    }
  ]
})
