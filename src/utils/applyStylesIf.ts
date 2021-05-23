import {
  ViewStyle,
  FlexStyle,
  ImageStyle,
  TransformsStyle,
  TextStyle,
  ShadowStyleIOS,
  TextStyleAndroid,
  TextStyleIOS
} from 'react-native'

type applyStylesIfStylesParam =
  | ViewStyle
  | FlexStyle
  | ImageStyle
  | TransformsStyle
  | TextStyle
  | ShadowStyleIOS
  | TextStyleAndroid
  | TextStyleIOS

/**
 * @name applyStylesIf
 * @description If the condition provided in the first argument evaluates to true then apply the styles from the second argument, otherwise returns an empty object.
 */
export const applyStylesIf = (
  condition: boolean | undefined,
  styles: applyStylesIfStylesParam
): applyStylesIfStylesParam | Record<string, never> => (condition ? styles : {})
