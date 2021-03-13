import React, {Children} from 'react'
import {Provider} from 'react-redux'
import * as TestingLibraryRN from '@testing-library/react-native'

import store from '../../store'

interface IMockedNavigationProps {
  navigate: jest.Mock
}

interface IRenderOptions {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
  initialState?: any
}

interface IRenderReturnValue extends TestingLibraryRN.RenderAPI {
  navigation: IMockedNavigationProps
}

const defaultState = store.getState()
const mockedStore = store as jest.Mocked<typeof store>
const mockedNavigation: IMockedNavigationProps = {
  navigate: jest.fn()
}

export const render = (
  Component: React.ReactElement,
  options: IRenderOptions
): IRenderReturnValue => {
  mockedStore.getState.mockReturnValue(options.initialState || defaultState)

  return {
    ...TestingLibraryRN.render(
      <Provider store={store}>
        {Children.map(Component, child =>
          React.cloneElement(child, {navigation: mockedNavigation})
        )}
      </Provider>
    ),
    navigation: mockedNavigation
  }
}

export * from '@testing-library/react-native'
