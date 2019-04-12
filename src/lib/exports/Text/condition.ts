import { BaraReactText, TextPressEventFilter } from './event'

export const nameOfText = (name: string) => (triggeringEvent: BaraReactText): boolean =>
  name ? name === triggeringEvent.name : true
