import 'react-native'
import React from 'react'
import {lightTheme} from '../../../services/themes'
import {render, fireEvent} from '../../../utils/test'
import WelcomeComponent, {WelcomeProps} from '../Welcome'

const Welcome = WelcomeComponent as React.FC<Partial<WelcomeProps>>

describe('Welcome Screen', () => {
  test('Should render the title correctly', () => {
    const {getByText, navigation} = render(<Welcome {...{theme: lightTheme}} />)
    const button = getByText(/get started/i)

    fireEvent.press(button)

    expect(navigation.navigate).toHaveBeenCalled()
    expect(getByText(/Welcome/i)).toBeDefined()
  })
})
