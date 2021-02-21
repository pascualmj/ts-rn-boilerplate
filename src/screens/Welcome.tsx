import React from 'react'
import {View, Text} from 'react-native'

import {withTheme, IThemeProps} from '../services/themes'

const Welcome: React.FC<IThemeProps> = ({theme}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: theme?.fonts?.rubikExtraBold,
          color: theme?.colors?.coolPink
        }}>
        Hi from RN!
      </Text>
    </View>
  )
}

export default withTheme<IThemeProps>(Welcome)
