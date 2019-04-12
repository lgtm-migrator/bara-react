import { BaraReactView } from './event'

export const nameOfView = (name: string) => (
  triggeringEvent: BaraReactView,
): boolean => (name ? name === triggeringEvent.name : true)
