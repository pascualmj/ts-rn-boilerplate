import React, {Children} from 'react'
import {Provider} from 'react-redux'
import * as TestingLibraryRN from '@testing-library/react-native'
import configureStore from 'redux-mock-store'

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

const mockStore = configureStore()
const mockedNavigation: IMockedNavigationProps = {
  navigate: jest.fn()
}

export const render = (
  Component: React.ReactElement,
  options: IRenderOptions
): IRenderReturnValue => {
  const store = mockStore(options.initialState || {})

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
