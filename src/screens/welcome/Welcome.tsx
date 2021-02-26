import React from 'react'
import {View, Text, Button} from 'react-native'

import {StackNavigationProp} from '@react-navigation/stack'
import {HOME_ROUTE} from '../../navigation/constants/routes'
import {useAppSelector} from '../../hooks/storeHooks'
import {welcomeValueSelector} from '../../store/slices/welcome/welcome'
import {withTheme, IThemeProps} from '../../services/themes'

type ParamList = {
  WelcomeRoute: undefined
  [HOME_ROUTE]: {userId: string} | undefined
}

interface WelcomeProps extends IThemeProps {
  navigation: StackNavigationProp<ParamList, 'WelcomeRoute'>
}

const Welcome: React.FC<WelcomeProps> = ({navigation, theme}) => {
  const title = useAppSelector(welcomeValueSelector)

  const goHome = () => navigation.navigate(HOME_ROUTE)

  return (
    <View>
      <Text
        style={{
          fontFamily: theme?.fonts?.rubikExtraBold,
          color: theme?.colors?.coolPink
        }}>
        {title}
      </Text>
      <Button onPress={goHome} title="Go to home" />
    </View>
  )
}

export default withTheme<WelcomeProps>(Welcome)
