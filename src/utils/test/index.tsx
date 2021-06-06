/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import React, {Children} from 'react'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import * as ReduxSaga from 'redux-saga'
import * as TestingLibraryRN from '@testing-library/react-native'
import {AnyAction, PayloadAction} from '@reduxjs/toolkit'

import apiClient from '../../services/apiClient'
import * as navigationService from '../../services/navigation'

interface IMockedNavigationProps {
  navigate: jest.Mock
}

interface IRenderOptions {
  initialState?: any
}

interface IRenderReturnValue extends TestingLibraryRN.RenderAPI {
  navigation: IMockedNavigationProps
}

interface IRunSagaOptions {
  saga: () => Generator<any, any, any>
  initialState?: any
  initialAction?: PayloadAction<any>
}

interface IRunSagaReturnValue {
  dispatched: AnyAction[]
  navigationService: {
    navigate: any
  }
}

const mockStore = configureStore()
const mockedNavigation: IMockedNavigationProps = {
  navigate: jest.fn()
}

export const render = (
  Component: React.ReactElement,
  options?: IRenderOptions
): IRenderReturnValue => {
  const store = mockStore(options?.initialState || {})

  return {
    ...TestingLibraryRN.render(
      <Provider store={store}>
        {Children.map(Component, child =>
          React.cloneElement(child, {navigation: mockedNavigation})
        )}
      </Provider>
    ),
    navigation: mockedNavigation
  }
}

export const runSaga = async ({
  saga,
  initialState,
  initialAction
}: IRunSagaOptions): Promise<IRunSagaReturnValue> => {
  const dispatched: AnyAction[] = []

  await ReduxSaga.runSaga<any, any, any>(
    {
      dispatch: action => dispatched.push(action),
      getState: () => initialState || {}
    },
    saga,
    initialAction
  ).toPromise()

  return {
    dispatched,
    navigationService
  }
}

export const apiClientMock = apiClient as jest.Mocked<typeof axios>

export * from '@testing-library/react-native'
