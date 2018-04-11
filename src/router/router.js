import challenges from '../page/challenges'
import scoreboard from '../page/scoreboard'
import about from '../page/about'
import award from '../page/award'
import notFound from '../page/notFound'

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
