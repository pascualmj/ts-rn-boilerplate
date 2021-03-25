import React from 'react'
import {render} from '../../../utils/test'
import BaseText from '../BaseText'

describe('BaseText', () => {
  test('Snapshot Test', () => {
    const {toJSON} = render(<BaseText text="Foo" />, {})
    expect(toJSON()).toMatchSnapshot()
  })
})
