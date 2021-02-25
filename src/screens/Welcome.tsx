import React from 'react'
import {View, Text} from 'react-native'

import {useAppSelector} from '../hooks/storeHooks'
import {welcomeValueSelector} from '../store/slices/welcome/welcome'
import {withTheme, IThemeProps} from '../services/themes'

const Welcome: React.FC<IThemeProps> = ({theme}) => {
  const title = useAppSelector(welcomeValueSelector)

  return (
    <View>
      <Text
        style={{
          fontFamily: theme?.fonts?.rubikExtraBold,
          color: theme?.colors?.coolPink
        }}>
        {title}
      </Text>
    </View>
  )
}

export default withTheme<IThemeProps>(Welcome)
