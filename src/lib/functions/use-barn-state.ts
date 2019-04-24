import { useBarn } from 'bara'
import { useState } from 'react'
import { useBaraContext } from '../context'

export function useBarnState(
  key: string,
  initValue?: any,
): [typeof initValue, (newState: typeof initValue) => void] {
  const [data, setData] = useState(initValue || null)
  const context = useBaraContext()

  const setStateProxy = (newState: any): void => {
    context.barn.setState(key, newState)
  }

  useBarn(key, newData => {
    setData(newData)
  })
  return [data, setStateProxy]
}
