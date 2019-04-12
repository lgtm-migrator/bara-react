import { useInit } from 'bara'
import { EventEmitter } from 'fbemitter'

export interface BarnContext {
  setState: (key: string, value: any) => void
}

export const barnContext: BarnContext = {
  setState: (key: string, value: any) => {
    console.log('Old set state still not being patched!')
    return
  },
}

export const mapBarnWithReact = (
  setState: (key: string, value: any) => void,
) => {
  useInit(() => {
    barnContext.setState = setState
  })
}
