import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import store from '../../../store'
import {Provider} from 'react-redux'
import {lightTheme} from '../../../services/themes'
import Welcome from '../Welcome'

const newRender = (Component: React.FC) =>
  render(
    <Provider store={store}>
      <Component />
    </Provider>
  )

describe('Welcome Screen', () => {
  jest.spyOn(store, 'getState')

  test('Should render the title correctly', () => {
    store.getState.mockReturnValue({
      welcome: {
        value: 'Hi from RN!'
      }
    })
    const {getByText} = newRender(() => <Welcome {...{theme: lightTheme}} />)
    expect(getByText('Hi from RN!')).toBeDefined()
  })
})
