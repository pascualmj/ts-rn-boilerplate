export type ThemeProps = {
  colors: {
    white: string
    coolPink: string
    waterBlue: string
    chillGrey: string
    deepGrey: string
    darkLoop: string
    backBlack: string
  }
  fonts: {
    rubikRegular: string
    rubikSemiBold: string
    rubikExtraBold: string
  }
}

export interface IThemeProps {
  theme?: ThemeProps
}

export const lightTheme: ThemeProps = {
  colors: {
    white: '#fff',
    coolPink: '#e14159',
    waterBlue: '#5d7ef9',
    chillGrey: '#aaa',
    deepGrey: '#666',
    darkLoop: '#222',
    backBlack: '#000'
  },
  fonts: {
    rubikRegular: 'Rubik-Regular',
    rubikSemiBold: 'Rubik-SemiBold',
    rubikExtraBold: 'Rubik-ExtraBold'
  }
}
