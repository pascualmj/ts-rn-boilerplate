import {IRouteConfig} from '../../types/navigationTypes'

import WelcomeScreen from '../../screens/welcome/Welcome'
import HomeScreen from '../../screens/home/Home'

export type CommonScreensParamList = {
  HomeRoute: undefined
  WelcomeRoute: undefined
}

const commonScreens: IRouteConfig<CommonScreensParamList>[] = [
  {
    name: 'WelcomeRoute',
    component: WelcomeScreen,
    options: {}
  },
  {
    name: 'HomeRoute',
    component: HomeScreen,
    options: {}
  }
]

export default commonScreens
