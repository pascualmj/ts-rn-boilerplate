import reducer, {
  initialState,
  fetchTitleStart,
  fetchTitleFailure,
  fetchTitleSuccess
} from '../welcome'

describe('Slice welcome', () => {
  test('fetchTitleStart action', () => {
    const state = reducer(initialState, fetchTitleStart())
    expect(state.isLoading).toBe(true)
    expect(state.error).toBe(false)
  })

  test('fetchTitleSucces action', () => {
    const mockPayload = 'foo'
    const state = reducer(initialState, fetchTitleSuccess(mockPayload))
    expect(state.isLoading).toBe(false)
    expect(state.value).toBe(mockPayload)
  })

  test('fetchTitleFailure action', () => {
    const state = reducer(initialState, fetchTitleFailure())
    expect(state.isLoading).toBe(false)
    expect(state.error).toBe(true)
  })
})
