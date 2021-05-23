import React from 'react'
import {View} from 'react-native'

import {BaseIcon, BaseText, BaseSafeWrapper} from '../../components'
import {withTheme, IThemeProps} from '../../services/themes'

const Home: React.FC<IThemeProps> = ({theme}) => {
  return (
    <BaseSafeWrapper isFullScreen>
      <BaseText text="Home Screen!" />
      <View>
        <BaseIcon icon="iconly_profile_outline" color={theme?.colors.waterBlue} size={90} />
      </View>
    </BaseSafeWrapper>
  )
}

export default withTheme<IThemeProps>(Home)
