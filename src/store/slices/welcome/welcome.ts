import {createSlice, createAction, createSelector, PayloadAction} from '@reduxjs/toolkit'

import {RootState} from '../../../types/storeTypes'

interface WelcomeState {
  value: string
  isLoading: boolean
  error: boolean
}

const sliceName = 'welcome'

const initialState: WelcomeState = {
  value: 'Hi from React Native!',
  isLoading: false,
  error: false
}

const welcomeSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    fetchTitleStart(state) {
      state.isLoading = true
      state.error = false
    },
    fetchTitleSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.value = action.payload
    },
    fetchTitleFailure(state) {
      state.isLoading = false
      state.error = true
    }
  }
})

const {actions, reducer} = welcomeSlice

// Actions
export const {fetchTitleStart, fetchTitleSuccess, fetchTitleFailure} = actions
export const fetchWelcome = createAction<void>(`${sliceName}/fetchWelcome`)

// Selectors
export const welcomeValueSelector = createSelector(
  (state: RootState) => state.welcome.value,
  value => value
)

export default reducer
