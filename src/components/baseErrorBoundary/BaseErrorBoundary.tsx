import React, {Component, ErrorInfo, ReactNode} from 'react'
import {View, Button, StyleSheet} from 'react-native'
import RNRestart from 'react-native-restart'

import {BaseText} from '..'
import {withTheme, IThemeProps} from '../../services/themes'

interface IErrorBoundaryProps extends IThemeProps {
  children: ReactNode
  logger: (err: Error) => unknown
}

interface IErrorBoundaryState {
  error: boolean
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  public state: IErrorBoundaryState = {
    error: false
  }

  public static getDerivedStateFromError(_: Error): IErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return {error: true}
  }

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.props.logger(error)
  }

  public restartApp(): void {
    // Wipe user data from async storage and restart the app
    RNRestart.Restart()
  }

  public render(): ReactNode {
    if (this.state.error) {
      return (
        <View style={styles.wrapper}>
          <BaseText text="Oops! Algo salió mal..." color={this.props.theme?.colors.chillGrey} />
          <Button onPress={this.restartApp} title="Volver" />
        </View>
      )
    }

    return this.props.children
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default withTheme<IErrorBoundaryProps>(ErrorBoundary)
