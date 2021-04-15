import React from 'react'
import {View, Text} from 'react-native'

import {BaseIcon} from '../../components'
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
      <View>
        <BaseIcon icon="iconly_profile_outline" color={theme?.colors.waterBlue} size={90} />
      </View>
    </View>
  )
}

export default withTheme<IThemeProps>(Home)
