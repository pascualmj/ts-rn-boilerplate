export type ThemeProps = {
  colors: {
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
  theme: ThemeProps
}

export const lightTheme: ThemeProps = {
  colors: {
    coolPink: '#e14159',
    waterBlue: '#5d7ef9',
    chillGrey: '#aaa',
    deepGrey: '#666',
    darkLoop: '#222',
    backBlack: '#000'
  },
  fonts: {
    rubikRegular: 'RubikRegular',
    rubikSemiBold: 'RubikSemiBold',
    rubikExtraBold: 'RubikExtraBold'
  }
}
