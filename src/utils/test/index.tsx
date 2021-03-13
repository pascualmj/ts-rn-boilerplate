import React from 'react'
import {Provider} from 'react-redux'
import * as TestingLibraryRN from '@testing-library/react-native'

import store from '../../store'

interface IRenderOptions {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
  initialState?: any
}

const defaultState = store.getState()

const mockedStore = store as jest.Mocked<typeof store>

export const render = (
  Component: React.FC,
  options: IRenderOptions
): TestingLibraryRN.RenderAPI => {
  mockedStore.getState.mockReturnValue(options.initialState || defaultState)

  return TestingLibraryRN.render(
    <Provider store={store}>
      <Component />
    </Provider>
  )
}
