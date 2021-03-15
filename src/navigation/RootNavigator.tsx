import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import {navigationRef} from '../services/navigation'
import screens, {RootStackParamList} from './screens'

const RootStack = createStackNavigator<RootStackParamList>()

const MainStack: React.FC = () => {
  return (
    <RootStack.Navigator>
      {screens.map((screen, index) => (
        <RootStack.Screen
          name={screen.name}
          component={screen.component}
          options={screen.options}
          key={index}
        />
      ))}
    </RootStack.Navigator>
  )
}

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  )
}

export default RootNavigator
