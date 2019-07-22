import Vue from 'vue'
import Router from 'vue-router'
import Monday from '../pages/Monday/monday'
import Tuesday from '../pages/Tuesday/tuesday'
import Wednesday from '@/pages/Wednesday/wednesday'
import Thursday from '../pages/Thursday/thursday'
import Firday from '../pages/Firday/firday'
import Saturday from '../pages/Saturday/saturday'
import Sunday from '../pages/Sunday/sunday'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wednesday',
      component: Wednesday
    },
    {
      path: '/monday',
      name: 'monday',
      component: Monday
    },
    {
      path: '/tuesday',
      name: 'tuesday',
      component: Tuesday
    },
    {
      path: '/wednesday',
      name: 'wednesday',
      component: Wednesday
    },
    
    {
      path: '/thursday',
      name: 'thursday',
      component: Thursday
    }
    ,
    {
      path: '/firday',
      name: 'firday',
      component: Firday
    },
    {
      path: '/saturday',
      name: 'saturday',
      component: Saturday
    },
    {
      path: '/sunday',
      name: 'sunday',
      component: Sunday
    }
    
     
    
  ]
})
