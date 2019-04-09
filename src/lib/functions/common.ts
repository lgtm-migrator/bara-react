import {
  BaraReactTouchable,
  TouchableEventFilter,
} from '../exports/Touchable/event'

export type ReactComponentTriggeringEvent = BaraReactTouchable

export const nameOf = (name: string) => (
  triggeringEvent: ReactComponentTriggeringEvent,
): boolean => (name ? name === triggeringEvent.name : true)

export const classOf = (className: string) => (
  triggeringEvent: ReactComponentTriggeringEvent,
): boolean => (className ? className === triggeringEvent.className : true)
