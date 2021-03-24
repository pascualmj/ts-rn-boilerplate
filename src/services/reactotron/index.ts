/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AsyncStorage from '@react-native-async-storage/async-storage'

let reactotron

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {default: Reactotron, storybook} = require('reactotron-react-native')
  const {reactotronRedux} = require('reactotron-redux')
  const sagaPlugin = require('reactotron-redux-saga')
  reactotron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
    .configure() // Controls connection & communication settings
    .useReactNative({
      storybook: true,
      networking: {
        ignoreUrls: /symbolicate/
      }
    })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect()
}

export default reactotron
