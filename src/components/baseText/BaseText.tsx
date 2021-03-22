import React from 'react'
import {Text} from 'react-native'

interface BaseTextProps {
  text: string
}

const BaseText: React.FC<BaseTextProps> = ({text}) => {
  return <Text>{text}</Text>
}

export default BaseText
