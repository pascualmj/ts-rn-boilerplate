import React from 'react'

import {IThemeProps} from '../themeValues'
import {ThemeContext} from '../context/ThemeContext'

export const withTheme = <P extends IThemeProps>(Component: React.ComponentType<P>) => {
  return (props: P): JSX.Element => (
    <ThemeContext.Consumer>{theme => <Component {...props} theme={theme} />}</ThemeContext.Consumer>
  )
}
