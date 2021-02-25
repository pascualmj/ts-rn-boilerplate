import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'
import {lightTheme} from '../../services/themes'
import Welcome from '../Welcome'

describe('Welcome Screen', () => {
  test('Should render the title correctly', () => {
    const {getByText} = render(<Welcome {...{theme: lightTheme}} />)
    expect(getByText('Hi from RN!')).toBeDefined()
  })
})
