import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../components/Games.vue'
import Consoles from '../components/Consoles.vue'
import News from '../components/News.vue'
import ActualityDetails from '../components/ActualityDetails.vue'


const routes = [
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/consoles',
    name: 'Consoles',
    component: Consoles
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new/:id',
    name: 'ActualityDetails',
    component: ActualityDetails
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
