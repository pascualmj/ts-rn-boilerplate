/* eslint-disable @typescript-eslint/no-var-requires */
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './slices/rootReducer'
import rootSaga from './sagas/rootSaga'

let sagaMiddleware = createSagaMiddleware()

const enhancers = []

// Configure reactotron with redux and redux saga
if (__DEV__) {
  const {default: Reactotron} = require('reactotron-react-native')
  const reactotron = require('../services/reactotron').default
  const sagaMonitor = Reactotron.createSagaMonitor()
  sagaMiddleware = createSagaMiddleware({sagaMonitor})
  enhancers.push(reactotron.createEnhancer())
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
  devTools: false,
  enhancers
})

sagaMiddleware.run(rootSaga)

export default store
