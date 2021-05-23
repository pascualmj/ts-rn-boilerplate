import React from 'react'
import {View, TouchableOpacity} from 'react-native'

import {BaseText, BaseSafeWrapper, BaseIcon} from '../../components'
import {withTheme, IThemeProps} from '../../services/themes'
import makeStyles from './BaseHeaderBar.styles'

interface BaseHeaderBarProps extends IThemeProps {
  title?: string
  rightAction?: boolean
}

const BaseHeaderBar: React.FC<BaseHeaderBarProps> = ({title = '', rightAction, theme}) => {
  const styles = makeStyles(theme)
  return (
    <BaseSafeWrapper style={styles.safeAreaWrapper} edges={['left', 'top', 'right']}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.leftArea}>
          <BaseIcon icon="iconly_arrow_left_filled" size={32} color={theme?.colors.white} />
        </TouchableOpacity>
        <BaseText text={title} style={styles.title} />
        <TouchableOpacity style={styles.rightArea}>
          {rightAction && (
            <BaseIcon icon="iconly_more_circle_outline" size={32} color={theme?.colors.white} />
          )}
        </TouchableOpacity>
      </View>
    </BaseSafeWrapper>
  )
}

export default withTheme<BaseHeaderBarProps>(BaseHeaderBar)
