import {StyleSheet, ViewStyle} from 'react-native'

interface IStyles {
  fullScreenStyles: ViewStyle
}

const styles = StyleSheet.create<IStyles>({
  fullScreenStyles: {
    flex: 1
  }
})

export default styles
