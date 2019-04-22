import * as ExportedStreams from '../exports'

export interface UseComponentsStreamConfig {
  Text?: boolean
  Touchable?: boolean
  TouchableOpacity?: boolean
  View?: boolean
}

const defaultConfig: UseComponentsStreamConfig = {
  Text: true,
  Touchable: true,
  TouchableOpacity: true,
  View: true,
}

/**
 * Register all components as Bara stream
 */
export function useComponentsStream(config?: UseComponentsStreamConfig) {
  const combinedConfig = { ...defaultConfig, ...config }
  for (const component in combinedConfig) {
    if ((combinedConfig as any)[component] === true) {
      const methodName = `use${component}Stream`
      if (methodName in ExportedStreams) {
        ;(ExportedStreams as any)[methodName]()
      }
    }
  }
}
