import { TouchableOpacityEventFilter } from './event'
import {
  TouchableOpacityPressCallback,
  useTouchableOpacityPressTrigger,
} from './trigger'

export function useTouchableOpacityPress(
  eventFilter: TouchableOpacityEventFilter,
  callback: TouchableOpacityPressCallback,
) {
  return useTouchableOpacityPressTrigger(eventFilter, callback)
}
