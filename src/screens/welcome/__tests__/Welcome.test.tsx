import 'react-native'
import React from 'react'
import {lightTheme} from '../../../services/themes'
import {render} from '../../../utils/test'
import WelcomeComponent, {WelcomeProps} from '../Welcome'

const Welcome = WelcomeComponent as React.FC<Partial<WelcomeProps>>

describe('Welcome Screen', () => {
  test('Should render the title correctly', () => {
    const {getByText} = render(() => <Welcome {...{theme: lightTheme}} />, {
      initialState: {
        welcome: {
          value: 'Hi from RN!'
        }
      }
    })
    expect(getByText('Hi from RN!')).toBeDefined()
  })
})
