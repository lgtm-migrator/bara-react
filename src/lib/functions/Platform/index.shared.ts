import { PlatformStatic } from 'react-native'

export type PlatformOSType = 'android' | 'ios' | 'web'

export type PlatformSelectSpecifics<T> = {
  [platform in PlatformOSType | 'default']?: T
}

export interface PlatformSelectOptions {
  fallbackToWeb?: boolean
}

export type PlatformSelect<T> = (
  specifics: PlatformSelectSpecifics<T>,
  options: PlatformSelectOptions,
) => T

export interface BaraReactPlatform extends PlatformStatic {
  isElectron: boolean
  isStandalone: boolean
  realOS: PlatformStatic['OS']
  selectUsingRealOS: <T>(specifics: PlatformSelectSpecifics<T>, _options?: PlatformSelectOptions) => T | undefined
}