export interface BaraBaseComponentProps {
  data?: any
  name?: string
  kind?: string
  event?: any
}

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
