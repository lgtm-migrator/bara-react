import { BaraReactTouchableOpacity, TouchableOpacityEventFilter } from './event'

export const nameOfTouchableOpacity = (name: string) => (
  triggeringEvent: BaraReactTouchableOpacity,
): boolean => (name ? name === triggeringEvent.name : true)

export const classOfTouchableOpacity = (className: string) => (
  triggeringEvent: BaraReactTouchableOpacity,
): boolean => (className ? className === triggeringEvent.className : true)
