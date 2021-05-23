import React from 'react'
import {StackNavigationOptions} from '@react-navigation/stack'

import {BaseHeaderBar} from '../../components'

interface IConfigurationProps {
  headerTitle?: string
  rightAction?: boolean
}

const getDefaultOptions = (config: IConfigurationProps): StackNavigationOptions => ({
  header: () => <BaseHeaderBar title={config.headerTitle} rightAction={config.rightAction} />
})

export default getDefaultOptions
