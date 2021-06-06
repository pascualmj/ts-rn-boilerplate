import {StyleSheet, ViewStyle, TextStyle} from 'react-native'

import {ThemeProps} from '../../services/themes'

interface IStyles {
  container: ViewStyle
  text: TextStyle
}

const styles = (theme?: ThemeProps, bgColor?: string, textColor?: string): IStyles =>
  StyleSheet.create<IStyles>({
    container: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bgColor || theme?.colors.waterBlue,
      borderRadius: 10,
      paddingHorizontal: 20
    },
    text: {
      fontSize: 18,
      fontFamily: theme?.fonts.rubikSemiBold,
      color: textColor || theme?.colors.white
    }
  })

export default styles
