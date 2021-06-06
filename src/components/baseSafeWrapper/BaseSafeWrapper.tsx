import React from 'react'
import {SafeAreaView, NativeSafeAreaViewProps} from 'react-native-safe-area-context'

import {applyStylesIf} from '../../utils'
import styles from './BaseSafeWrapper.styles'

interface BaseSafeWrapperProps extends NativeSafeAreaViewProps {
  isFullScreen?: boolean
  applyAllInsets?: boolean
}

const BaseSafeWrapper: React.FC<BaseSafeWrapperProps> = ({
  children,
  edges = ['left', 'bottom', 'right'],
  isFullScreen,
  applyAllInsets,
  style = {},
  ...otherProps
}) => {
  const formattedEdges = applyAllInsets ? [] : edges

  return (
    <SafeAreaView
      style={[applyStylesIf(isFullScreen, styles.fullScreenStyles), style]}
      edges={formattedEdges}
      {...otherProps}>
      {children}
    </SafeAreaView>
  )
}

export default BaseSafeWrapper
