export interface BaraBaseComponentProps {
  data?: any
  name?: string
  className?: string
  id?: string
}

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
