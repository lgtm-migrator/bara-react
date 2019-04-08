import { useCondition } from 'bara'
import { BaraReactTouchable, TouchableEventFilter } from './event'

export const nameOf = (name: string) => (triggeringEvent: BaraReactTouchable): boolean =>
  name ? name === triggeringEvent.name : true

export const classOf = (className: string) => (
  triggeringEvent: BaraReactTouchable,
): boolean => (className ? className === triggeringEvent.className : true)
