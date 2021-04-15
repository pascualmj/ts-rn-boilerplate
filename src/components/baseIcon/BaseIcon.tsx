import React from 'react'
import {StyleProp, ViewStyle} from 'react-native'

import Icons from '../../assets/icons'
import {withTheme, IThemeProps} from '../../services/themes'

interface BaseIconProps extends IThemeProps {
  icon: keyof typeof Icons
  color?: string
  size?: number
  style?: StyleProp<ViewStyle>
}

const BaseIcon: React.FC<BaseIconProps> = ({icon, size = 24, color, style = {}, theme}) => {
  const Icon = Icons[icon] || null
  const props = {
    width: size,
    height: size,
    color: color || theme?.colors.backBlack
  }

  return Icon && <Icon {...props} style={style} />
}

export default withTheme<BaseIconProps>(BaseIcon)
