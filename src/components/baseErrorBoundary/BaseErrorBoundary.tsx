import React, {Component, ErrorInfo, ReactNode} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import RNRestart from 'react-native-restart'

interface IErrorBoundaryProps {
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
          <Text>Oops! Algo salió mal...</Text>
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

export default ErrorBoundary
