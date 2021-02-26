import React from 'react'
import {View, Text} from 'react-native'

import {withTheme, IThemeProps} from '../../services/themes'

const Home: React.FC<IThemeProps> = ({theme}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: theme?.fonts?.rubikExtraBold,
          color: theme?.colors?.waterBlue
        }}>
        Home Screen!
      </Text>
    </View>
  )
}

export default withTheme<IThemeProps>(Home)
