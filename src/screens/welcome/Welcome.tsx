import React from 'react'
import {View, Text, Button} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'

import {HOME_ROUTE} from '../../navigation/constants/routes'
import {RootStackParamList} from '../../navigation/screens'
import {useAppSelector} from '../../hooks/storeHooks'
import {welcomeValueSelector} from '../../store/slices/welcome/welcome'
import {withTheme, IThemeProps} from '../../services/themes'

export interface WelcomeProps
  extends IThemeProps,
    StackScreenProps<RootStackParamList, 'WelcomeRoute'> {}

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
