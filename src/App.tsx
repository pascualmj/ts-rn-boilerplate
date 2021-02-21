import React from 'react'

import ThemeProvider from './services/themes/context/ThemeContext'
import Welcome from './screens/Welcome'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Welcome />
    </ThemeProvider>
  )
}

export default App
