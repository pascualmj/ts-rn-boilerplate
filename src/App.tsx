import React from 'react'
import {Provider} from 'react-redux'

import store from './store'
import ThemeProvider from './services/themes/context/ThemeContext'
import Welcome from './screens/Welcome'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Welcome />
      </ThemeProvider>
    </Provider>
  )
}

export default App
