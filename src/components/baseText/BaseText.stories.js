import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {text} from '@storybook/addon-knobs'

import BaseText from './BaseText'

const BaseTextStory = storiesOf('BaseText', module)

BaseTextStory.add('default', () => <BaseText text={text('Text', 'Edit me...')} />)
