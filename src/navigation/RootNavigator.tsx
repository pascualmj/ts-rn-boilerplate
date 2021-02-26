import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import screens from './screens'

const RootStack = createStackNavigator()

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

export default MainStack
