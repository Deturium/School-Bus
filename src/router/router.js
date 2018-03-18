import challenges from '../page/challengs'
import scoreboard from '../page/scoreboard'
import about from '../page/about'
import award from '../page/award'

export default [
  {
    path: '/',
    component: challenges,
  },
  {
    path: '/challenges',
    component: challenges,
  },
  {
    path: '/scoreboard',
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
]
