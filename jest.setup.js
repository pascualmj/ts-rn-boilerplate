/* eslint-disable @typescript-eslint/no-empty-function*/
import 'react-native-gesture-handler/jestSetup'

jest.mock('react-native-reanimated', () => {
  /* eslint-disable-next-line @typescript-eslint/no-var-requires */
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {}

  return Reanimated
})

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

// APP Api Client
jest.mock('./src/services/apiClient', () => ({
  get: jest.fn(),
  post: jest.fn(),
  patch: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}))

// APP Navigation Ref
jest.mock('./src/services/navigation', () => ({
  navigate: jest.fn()
}))
