import ApiClient, {ApiClientResponse} from '../../services/apiClient'

interface IWelcomeResponse {
  result: {
    title: string
  }
}

export const fetchWelcome = (): ApiClientResponse<IWelcomeResponse> =>
  ApiClient.get('https://run.mocky.io/v3/3dc92e75-52cf-4861-a8cf-b047977c3d38')
