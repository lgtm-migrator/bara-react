import {
  BaraReactTouchable,
  TouchableEventFilter,
} from '../exports/Touchable/event'
import { BaraBaseComponentProps } from '../models'

export type ReactComponentTriggeringEvent = BaraReactTouchable

export const nameOf = (checkName: string) => ({
  name,
}: BaraBaseComponentProps): boolean => checkName === name

export const kindOf = (kindName: string) => ({
  kind,
}: BaraBaseComponentProps): boolean => kindName === kind
