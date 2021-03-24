import 'react-native-gesture-handler'
import React from 'react'
import {Provider as StoreProvider} from 'react-redux'
import Reactotron from 'reactotron-react-native'

import StorybookUIHMRRoot from '../storybook/StorybookUIHMRRoot'
import initSentry, {SentryErrorBoundary} from './services/sentry'
import store from './store'
import ThemeProvider from './services/themes/context/ThemeContext'
import RootNavigator from './navigation/RootNavigator'

// Sentry Initialization
initSentry()

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <SentryErrorBoundary>
          <RootNavigator />
        </SentryErrorBoundary>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default __DEV__ ? Reactotron.storybookSwitcher(StorybookUIHMRRoot)(App) : App
