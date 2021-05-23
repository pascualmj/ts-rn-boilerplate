import {IRouteConfig} from '../../types/navigationTypes'

import WelcomeScreen from '../../screens/welcome/Welcome'
import HomeScreen from '../../screens/home/Home'

import getDefaultOptions from '../config/getDefaultOptions'

export type CommonScreensParamList = {
  HomeRoute: undefined
  WelcomeRoute: undefined
}

const commonScreens: IRouteConfig<CommonScreensParamList>[] = [
  {
    name: 'WelcomeRoute',
    component: WelcomeScreen,
    options: {
      headerShown: false
    }
  },
  {
    name: 'HomeRoute',
    component: HomeScreen,
    options: getDefaultOptions({
      headerTitle: 'Panel de control'
    })
  }
]

export default commonScreens
