import React from 'react'
import {View, Text} from 'react-native'

import {BaseIcon, BaseText} from '../../components'
import {withTheme, IThemeProps} from '../../services/themes'

const Home: React.FC<IThemeProps> = ({theme}) => {
  return (
    <View>
      <BaseText text="Home Screen!" />
      <View>
        <BaseIcon icon="iconly_profile_outline" color={theme?.colors.waterBlue} size={90} />
      </View>
    </View>
  )
}

export default withTheme<IThemeProps>(Home)
