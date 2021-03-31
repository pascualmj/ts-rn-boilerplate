/* eslint-disable @typescript-eslint/no-explicit-any */

type TParser<I, O> = (input: I) => O

type TCreate = (
  identity: string
) => {
  addParser: <I, O>(name: string, parser: TParser<I, O>) => void
  parse: (name: string, input: any) => any
  getName: () => string
}

interface IParsers {
  [key: string]: TParser<any, any>
}

const create: TCreate = identity => {
  const parserName = identity
  const parsers: IParsers = {}

  const getName = () => parserName

  const parse = (name: string, input: any) => parsers[name](input)

  return {
    addParser: <Input, Output>(name: string, parser: TParser<Input, Output>) => {
      parsers[name] = parser
    },
    parse,
    getName
  }
}

export default {
  create
}
