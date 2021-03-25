import * as React from 'react'
import {NavigationContainerRef} from '@react-navigation/native'

import {RootStackParamList} from '../../navigation/screens'

export const navigationRef = React.createRef<NavigationContainerRef>()

export function navigate(
  name: keyof RootStackParamList,
  params?: RootStackParamList[keyof RootStackParamList]
): void {
  navigationRef.current?.navigate(name, params)
}
