import axios, {AxiosResponse} from 'axios'

const ApiClient = axios.create({
  timeout: 10000
})

export type ApiClientResponse<D> = Promise<AxiosResponse<D>>

export default ApiClient
