import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'

import store from './store'
import ThemeProvider from './services/themes/context/ThemeContext'
import {navigationRef} from './services/navigation'
import RootNavigator from './navigation/RootNavigator'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer ref={navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}

export default App
