import React from 'react'
import {View, TouchableOpacity, TouchableOpacityProps} from 'react-native'

import {withTheme, IThemeProps} from '../../services/themes'
import {BaseText} from '../../components'
import makeStyles from './BaseButton.styles'

interface BaseButtonProps extends IThemeProps, TouchableOpacityProps {
  text?: string
  bgColor?: string
  textColor?: string
}

const BaseButton: React.FC<BaseButtonProps> = ({
  text = '',
  bgColor,
  textColor,
  style = {},
  theme,
  ...rest
}) => {
  const styles = makeStyles(theme, bgColor, textColor)

  return (
    <TouchableOpacity style={[style]} {...rest}>
      <View style={styles.container}>
        <BaseText text={text} style={styles.text} />
      </View>
    </TouchableOpacity>
  )
}

export default withTheme(BaseButton)
