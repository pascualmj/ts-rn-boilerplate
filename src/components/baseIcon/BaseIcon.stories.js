import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {color, number, select} from '@storybook/addon-knobs'

import BaseIcon from './BaseIcon'

const BaseIconStory = storiesOf('BaseIcon', module)

BaseIconStory.add('default', ({parameters: {options: {theme, icons}}}) => (
  <BaseIcon
    icon={select('Icon', icons, icons.iconly_profile_outline)}
    color={color('Color', theme.colors.coolPink)}
    size={number('Size', 32)}
  />
))
