import 'react-native-gesture-handler'
import React from 'react'
import {Provider as StoreProvider} from 'react-redux'

import {logError} from './services/sentry'
import store from './store'
import ThemeProvider from './services/themes/context/ThemeContext'
import RootNavigator from './navigation/RootNavigator'
import BaseErrorBoundary from './components/baseErrorBoundary/BaseErrorBoundary'

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <BaseErrorBoundary logger={logError}>
          <RootNavigator />
        </BaseErrorBoundary>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
