import { setBarnState, useInit } from 'bara'

export interface BarnContext {
  setState: (key: string, value: any) => void
}

export const barnContext: BarnContext = {
  setState: setBarnState
}
