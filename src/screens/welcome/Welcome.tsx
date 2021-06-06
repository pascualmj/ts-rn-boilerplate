import React from 'react'
import {View, StatusBar} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'

import {BaseText, BaseSafeWrapper, BaseButton} from '../../components'
import {RootStackParamList} from '../../navigation/screens'
import {withTheme, IThemeProps} from '../../services/themes'
import makeStyles from './Welcome.styles'

export interface WelcomeProps
  extends IThemeProps,
    StackScreenProps<RootStackParamList, 'WelcomeRoute'> {}

const Welcome: React.FC<WelcomeProps> = ({theme, navigation}) => {
  const styles = makeStyles(theme)

  const start = () => navigation.navigate('HomeRoute')

  return (
    <BaseSafeWrapper isFullScreen applyAllInsets style={styles.safeWrapper}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.body}>
        <BaseText style={styles.title} text="Welcome! 😄" />
      </View>
      <BaseButton
        text="Let's get started! 🚀"
        bgColor={theme?.colors.white}
        textColor={theme?.colors.waterBlue}
        style={styles.button}
        onPress={start}
      />
    </BaseSafeWrapper>
  )
}

export default withTheme<WelcomeProps>(Welcome)
