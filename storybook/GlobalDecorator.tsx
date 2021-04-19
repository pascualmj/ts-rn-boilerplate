import React from 'react'
// import {View} from 'react-native'
import ThemeProvider from '../src/services/themes/context/ThemeContext'

const GlobalDecorator = (Story: React.FC): JSX.Element => <ThemeProvider>{Story({})}</ThemeProvider>
// const GlobalDecorator = Story => <View style={{backgroundColor: 'dodgerblue'}}>{Story({})}</View>

export default GlobalDecorator
