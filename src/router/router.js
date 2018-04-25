import challenges from '../page/challenges'
import scoreboard from '../page/scoreboard'
import about from '../page/about'
import award from '../page/award'
// import notFound from '../page/notFound'
// const notFound = () => import('../page/notFound')
const notFound = r => require.ensure([], () => r(require('../page/notFound')), '404')

export default [
  {
    path: '/',
    component: challenges,
  },
  {
    path: '/challenges/:id?',
    component: challenges,
  },
  {
    // compatible School-Bus-V1's url
    path: '/play',
    redirect: route => `/challenges/${route.query.q}`
  },
  {
    path: '/scoreboard/:type?',
    component: scoreboard,
  },
  {
    path: '/about',
    component: about,
  },
  {
    path: '/award',
    component: award,
  },
  {
    path: '/404',
    component: notFound
  },
  {
    path: '*',
    component: notFound
  }
]
