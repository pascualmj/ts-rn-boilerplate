import React from 'react'
import {Text, TextProps} from 'react-native'

import {withTheme, IThemeProps} from '../../services/themes'

interface BaseTextProps extends IThemeProps, TextProps {
  text?: string
  fontFamily?: string
  color?: string
  size?: number
}

const BaseText: React.FC<BaseTextProps> = ({
  text = '',
  fontFamily,
  color,
  size = 14,
  children,
  style = {},
  theme,
  ...rest
}) => {
  const styles = {
    fontFamily: fontFamily || theme?.fonts.rubikRegular,
    fontSize: size,
    color: color || theme?.colors.backBlack
  }

  return (
    <Text style={[styles, style]} {...rest}>
      {text}
      {children}
    </Text>
  )
}

export default withTheme<BaseTextProps>(BaseText)
