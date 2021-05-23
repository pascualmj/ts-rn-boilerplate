import React from 'react'
import {SafeAreaView, NativeSafeAreaViewProps} from 'react-native-safe-area-context'

import {applyStylesIf} from '../../utils'
import styles from './BaseSafeWrapper.styles'

interface BaseSafeWrapperProps extends NativeSafeAreaViewProps {
  isFullScreen?: boolean
}

const BaseSafeWrapper: React.FC<BaseSafeWrapperProps> = ({
  children,
  edges = ['left', 'right', 'bottom'],
  isFullScreen,
  style = {},
  ...otherProps
}) => {
  return (
    <SafeAreaView
      style={[applyStylesIf(isFullScreen, styles.fullScreenStyles), style]}
      edges={edges}
      {...otherProps}>
      {children}
    </SafeAreaView>
  )
}

export default BaseSafeWrapper
