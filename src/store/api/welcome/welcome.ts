import ApiClient from '../../../services/apiClient'
import {IFetchWelcomeParsed} from './welcome.schemes'
import welcomeParser from './welcome.parser'

export const fetchWelcome = async (): Promise<IFetchWelcomeParsed> => {
  return welcomeParser.parse('fetchWelcome', await ApiClient.get(''))
}

export * from './welcome.schemes'
