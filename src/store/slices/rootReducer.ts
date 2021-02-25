import {combineReducers} from '@reduxjs/toolkit'

import welcomeReducer from './welcome/welcome'

const rootReducer = combineReducers({
  welcome: welcomeReducer
})

export default rootReducer
