import {ComponentType} from 'react'
import {StackNavigationOptions} from '@react-navigation/stack'

export interface IRouteConfig<N> {
  name: keyof N
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
  component: ComponentType<any>
  options: StackNavigationOptions
}
