import React from 'react'
import {render} from '../../../utils/test'
import BaseIcon from '../BaseIcon'

describe('BaseIcon', () => {
  test('Snapshot Test', () => {
    const {toJSON} = render(<BaseIcon icon="iconly_profile_outline" />, {})
    expect(toJSON()).toMatchSnapshot()
  })
})
