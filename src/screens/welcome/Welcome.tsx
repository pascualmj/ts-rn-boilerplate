import React, {useEffect} from 'react'
import {View, Text, Button} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'

import {BaseText} from '../../components'
import {HOME_ROUTE} from '../../navigation/constants/routes'
import {RootStackParamList} from '../../navigation/screens'
import {useAppSelector, useAppDispatch} from '../../hooks/storeHooks'
import {fetchWelcome, welcomeValueSelector} from '../../store/slices/welcome/welcome'
import {withTheme, IThemeProps} from '../../services/themes'

export interface WelcomeProps
  extends IThemeProps,
    StackScreenProps<RootStackParamList, 'WelcomeRoute'> {}

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  const dispatch = useAppDispatch()
  const title = useAppSelector(welcomeValueSelector)

  useEffect(() => {
    dispatch(fetchWelcome())
  }, [dispatch])

  const goHome = () => navigation.navigate(HOME_ROUTE)

  return (
    <View>
      <BaseText text={title} />
      <Button onPress={goHome} title="Go to home" />
    </View>
  )
}

export default withTheme<WelcomeProps>(Welcome)
