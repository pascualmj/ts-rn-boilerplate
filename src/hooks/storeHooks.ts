import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {RootState, AppDispatch} from '../types/storeTypes'

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
