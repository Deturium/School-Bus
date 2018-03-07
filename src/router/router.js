import challenges from '../page/challengs'
import scoreboard from '../page/scoreboard'

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
]
