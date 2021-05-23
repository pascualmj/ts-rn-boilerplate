import {StyleSheet, ViewStyle, TextStyle} from 'react-native'

import {ThemeProps} from '../../services/themes'

interface IStyles {
  safeAreaWrapper: ViewStyle
  headerContainer: ViewStyle
  title: TextStyle
  leftArea: ViewStyle
  rightArea: ViewStyle
}

const sideAreas = {
  flexBasis: 32,
  flexShrink: 0,
  flexGrow: 0
}

const styles = (theme?: ThemeProps): IStyles =>
  StyleSheet.create<IStyles>({
    safeAreaWrapper: {
      backgroundColor: theme?.colors.waterBlue
    },
    headerContainer: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      backgroundColor: theme?.colors.waterBlue
    },
    title: {
      color: theme?.colors.white,
      fontSize: 18,
      fontFamily: theme?.fonts.rubikSemiBold
    },
    leftArea: {
      ...sideAreas
    },
    rightArea: {
      ...sideAreas
    }
  })

export default styles
