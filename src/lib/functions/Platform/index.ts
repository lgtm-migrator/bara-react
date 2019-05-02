// Credits: Bruno Lemos (https://github.com/devhubapp/devhub/blob/master/packages/components/src/libs/platform/index.ts)

import { Platform as _Platform } from 'react-native'

import { BaraReactPlatform, PlatformSelectSpecifics, PlatformSelectOptions } from './index.shared'

export const Platform: BaraReactPlatform = {
  ..._Platform,
  isElectron: false,
  isStandalone: true,
  realOS: _Platform.OS,
  selectUsingRealOS<T>(
    specifics: PlatformSelectSpecifics<T>,
    _options?: PlatformSelectOptions,
  ) {
    return _Platform.select(specifics)
  },
}