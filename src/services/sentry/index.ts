import * as Sentry from '@sentry/react-native'
import Config from 'react-native-config'

export const logError = (err: Error): string => Sentry.captureException(err)

Sentry.init({
  dsn: Config.SENTRY_DSN
  // More configuration here
})
