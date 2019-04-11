import { BaraReactTouchable, TouchableEventFilter } from './event'

export const nameOfTouchable = (name: string) => (triggeringEvent: BaraReactTouchable): boolean =>
  name ? name === triggeringEvent.name : true

export const classOfTouchable = (className: string) => (
  triggeringEvent: BaraReactTouchable,
): boolean => (className ? className === triggeringEvent.className : true)
