import * as Sentry from '@sentry/react-native'
import Config from 'react-native-config'

export default function initSentry(): void {
  if (!__DEV__) {
    Sentry.init({
      dsn: Config.SENTRY_DSN,
      // More configuration here
      environment: Config.SENTRY_ENVIRONMENT
    })
  }
}
