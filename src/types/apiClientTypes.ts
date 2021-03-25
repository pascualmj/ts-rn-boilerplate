import {AxiosResponse} from 'axios'

export type ApiClientResponsePromise<D> = Promise<AxiosResponse<D>>
export type ApiClientResponse<D> = AxiosResponse<D>
