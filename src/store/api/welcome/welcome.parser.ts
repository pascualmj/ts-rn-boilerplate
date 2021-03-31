import ApiParser from '../../../services/apiParser/parser'
import {IFetchWelcomeResponse, IFetchWelcomeParsed} from './welcome.schemes'

const welcomeParser = ApiParser.create('welcomeParser')

export const PARSER_FETCH_WELCOME = 'fetchWelcome'

welcomeParser.addParser<IFetchWelcomeResponse, IFetchWelcomeParsed>(
  PARSER_FETCH_WELCOME,
  input => ({
    primary: input.data.result.title,
    count: input.data.result.title.length
  })
)

export default welcomeParser
