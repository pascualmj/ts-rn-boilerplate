import {runSaga, apiClientMock} from '../../../../utils/test'
import {fetchWelcomeWorker} from '../welcome'
import {
  fetchTitleFailure,
  fetchTitleStart,
  fetchTitleSuccess
} from '../../../slices/welcome/welcome'

describe('Sagas: welcome', () => {
  describe('fetchWelcomeWorker', () => {
    test('Should do something here...', async () => {
      const mockResponse = {data: {result: {title: 'foo'}}}
      apiClientMock.get.mockImplementation(() => Promise.resolve(mockResponse))

      const {dispatched} = await runSaga({
        saga: fetchWelcomeWorker,
        initialState: {
          welcome: {
            value: 'Hi from RN!'
          }
        }
      })

      expect(dispatched[0]).toEqual(fetchTitleStart())
      expect(apiClientMock.get).toHaveBeenCalledTimes(1)
      expect(dispatched[1]).toEqual(fetchTitleSuccess(mockResponse.data.result.title))
    })

    test('Should do something in case of error...', async () => {
      apiClientMock.get.mockImplementation(() => Promise.reject())

      const {dispatched} = await runSaga({
        saga: fetchWelcomeWorker,
        initialState: {
          welcome: {
            value: 'Hi from RN!'
          }
        }
      })

      expect(dispatched[0]).toEqual(fetchTitleStart())
      expect(apiClientMock.get).toHaveBeenCalledTimes(1)
      expect(dispatched[1]).toEqual(fetchTitleFailure())
    })
  })
})
