import ApiClient from '../../../services/apiClient'
import {ApiClientResponsePromise, ApiClientResponse} from '../../../types/apiClientTypes'
import {IFetchWelcome} from './welcome.schemes'

export type IFetchWelcomeResponse = ApiClientResponse<IFetchWelcome>

export const fetchWelcome = (): ApiClientResponsePromise<IFetchWelcome> =>
  ApiClient.get('https://run.mocky.io/v3/3dc92e75-52cf-4861-a8cf-b047977c3d38')
