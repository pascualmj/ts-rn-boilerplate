import ApiClient from '../../../services/apiClient'
import {IFetchWelcomeParsed} from './welcome.schemes'
import welcomeParser, {PARSER_FETCH_WELCOME} from './welcome.parser'

export const fetchWelcome = async (): Promise<IFetchWelcomeParsed> => {
  return welcomeParser.parse(PARSER_FETCH_WELCOME, await ApiClient.get(''))
}

export * from './welcome.schemes'
