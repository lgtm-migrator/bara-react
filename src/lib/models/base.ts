export interface BaraBaseComponentProps {
  data?: any
  name?: string
  kind?: string
}

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
