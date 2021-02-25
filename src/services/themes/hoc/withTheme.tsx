import React from 'react'

import {IThemeProps} from '../themeValues'
import {ThemeContext} from '../context/ThemeContext'

export const withTheme = <P extends IThemeProps>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => (
    <ThemeContext.Consumer>{theme => <Component {...props} theme={theme} />}</ThemeContext.Consumer>
  )
}
