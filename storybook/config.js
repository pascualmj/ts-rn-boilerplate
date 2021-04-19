// if you use expo remove this line
import {getStorybookUI, configure, addDecorator, addParameters} from '@storybook/react-native'
import {withKnobs} from '@storybook/addon-knobs'

import {loadStories} from './storyLoader'
import GlobalDecorator from './GlobalDecorator'
import {lightTheme} from '../src/services/themes'
import Icons from '../src/assets/icons'

import './rn-addons'

// enables knobs for all stories
addDecorator(withKnobs)

// add global decorator (ThemeProvider)
addDecorator(GlobalDecorator)

// Generate list of icons in order to add them to global parameters for stories
const iconList = Object.keys(Icons)
const options = {}
iconList.forEach(item => (options[item] = item))

// add global parameters
addParameters({
  options: {
    theme: lightTheme,
    icons: options
  }
})

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null
})

export default StorybookUIRoot
