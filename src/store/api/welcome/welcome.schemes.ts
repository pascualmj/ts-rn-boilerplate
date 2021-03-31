import {ApiClientResponse} from '../../../types/apiClientTypes'

interface IFetchWelcome {
  result: {
    title: string
  }
}
export interface IFetchWelcomeParsed {
  primary: string
  count: number
}
export type IFetchWelcomeResponse = ApiClientResponse<IFetchWelcome>
