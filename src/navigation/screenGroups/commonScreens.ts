import {HOME_ROUTE, WELCOME_ROUTE} from '../constants/routes'

import WelcomeScreen from '../../screens/welcome/Welcome'
import HomeScreen from '../../screens/home/Home'

const commonScreens = [
  {
    name: WELCOME_ROUTE,
    component: WelcomeScreen,
    options: {}
  },
  {
    name: HOME_ROUTE,
    component: HomeScreen,
    options: {}
  }
]

export default commonScreens
