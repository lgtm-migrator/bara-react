import { BaraReactText, TextPressEventFilter } from './event'

export const textName = (name: string) => (triggeringEvent: BaraReactText): boolean =>
  name ? name === triggeringEvent.name : true
