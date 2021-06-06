import {StyleSheet, TextStyle, ViewStyle} from 'react-native'

import {ThemeProps} from '../../services/themes'

interface IStyles {
  safeWrapper: ViewStyle
  body: ViewStyle
  title: TextStyle
  button: ViewStyle
}

const styles = (theme?: ThemeProps): IStyles =>
  StyleSheet.create<IStyles>({
    safeWrapper: {
      backgroundColor: theme?.colors.waterBlue,
      paddingHorizontal: 20
    },
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontFamily: theme?.fonts.rubikExtraBold,
      fontSize: 32,
      color: theme?.colors.white
    },
    button: {
      marginBottom: 30
    }
  })

export default styles
