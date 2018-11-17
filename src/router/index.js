import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'
import Tables from '../components/Tables'
import Maps from '../components/Maps'
import BadGateway from '../components/BadGateway'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Доска',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/profile',
      name: 'Профиль',
      props: { page: 2 },
      component: Profile
    },
    {
      path: '/tables',
      name: 'Таблицы',
      props: { page: 3 },
      component: Tables
    },
    {
      path: '/maps',
      name: 'Карты',
      props: { page: 4 },
      component: Maps
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 5 },
      component: BadGateway
    },
    {
      path: '*',
      props: { page: 5 },
      redirect: '/404'
    }
  ]
})
