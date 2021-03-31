import ApiParser from '../../../services/apiParser/parser'
import {IFetchWelcomeResponse, IFetchWelcomeParsed} from './welcome.schemes'

const welcomeParser = ApiParser.create('welcomeParser')

welcomeParser.addParser<IFetchWelcomeResponse, IFetchWelcomeParsed>('fetchWelcome', input => ({
  primary: input.data.result.title,
  count: input.data.result.title.length
}))

export default welcomeParser
