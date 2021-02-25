import React from 'react'

import {lightTheme} from '../themeValues'

export const ThemeContext = React.createContext<typeof lightTheme>(lightTheme)

const ThemeProvider: React.FC = ({children}) => {
  return <ThemeContext.Provider value={lightTheme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
