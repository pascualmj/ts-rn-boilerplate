import React from 'react'
import * as Sentry from '@sentry/react-native'

import {switchCallback} from '../../utils'
import BaseErrorBoundary from '../../components/baseErrorBoundary/BaseErrorBoundary'

export const logError = switchCallback<(err: Error) => string>(!__DEV__, (err: Error) =>
  Sentry.captureException(err)
)

export const SentryErrorBoundary: React.FC = ({children}) => {
  return <BaseErrorBoundary logger={logError}>{children}</BaseErrorBoundary>
}
