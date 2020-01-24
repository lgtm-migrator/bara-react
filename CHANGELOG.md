## [3.1.1](https://github.com/barajs/bara-react/compare/v3.1.0...v3.1.1) (2020-01-24)


### Bug Fixes

* **deps:** update dependency react-native-web to ^0.12.0 ([f9d02dc](https://github.com/barajs/bara-react/commit/f9d02dc))

# [3.1.0](https://github.com/barajs/bara-react/compare/v3.0.0...v3.1.0) (2019-05-02)


### Features

* **bara:** add  HOC ([f923459](https://github.com/barajs/bara-react/commit/f923459))
* **bara:** add `whenReactAppMounted` trigger ([68a1108](https://github.com/barajs/bara-react/commit/68a1108))
* **functions:** add Platform API for OS detection ([a2e7395](https://github.com/barajs/bara-react/commit/a2e7395))

# [3.0.0](https://github.com/barajs/bara-react/compare/v2.0.4...v3.0.0) (2019-04-26)


### Bug Fixes

* **bara:** new operators and change hook function name ([#20](https://github.com/barajs/bara-react/issues/20)) ([319bff7](https://github.com/barajs/bara-react/commit/319bff7))
* **Text:** correct Text new API event ([da75cf4](https://github.com/barajs/bara-react/commit/da75cf4))
* **TouchableOpacity:** bind event to bara with React event.persist() to preserve its props ([79a23dd](https://github.com/barajs/bara-react/commit/79a23dd))


### Features

* **functions:** new opearator useComponentsStream for register all stream at once (can exclude) ([447b6ad](https://github.com/barajs/bara-react/commit/447b6ad))
* **Text:** use new Bara hook piper ([f7bc046](https://github.com/barajs/bara-react/commit/f7bc046))
* **Touchable:** add `onPressIn`, `onPressOut`, `onLongPress` ([6d14a05](https://github.com/barajs/bara-react/commit/6d14a05))
* **Touchable:** change hook params with new Bara API ([cea652b](https://github.com/barajs/bara-react/commit/cea652b))
* **Touchable:** rename condition piper ([7844f5a](https://github.com/barajs/bara-react/commit/7844f5a))
* **TouchableOpacity:** add new event handler and change hook method ([279c814](https://github.com/barajs/bara-react/commit/279c814))
* **TouchableOpacity:** change the way hook take params ([6989026](https://github.com/barajs/bara-react/commit/6989026))
* **View:** change hook function params with new Bara API ([beeec75](https://github.com/barajs/bara-react/commit/beeec75))


### BREAKING CHANGES

* **View:** make hook API pipable
* **TouchableOpacity:** change method name of `useTouchableOpacityPress` to `whenTouchableOpacityPress`

## [2.0.4](https://github.com/barajs/bara-react/compare/v2.0.3...v2.0.4) (2019-04-24)


### Bug Fixes

* **deps:** update dependency bara to v2.4.0 ([7bd8ff4](https://github.com/barajs/bara-react/commit/7bd8ff4))

## [2.0.3](https://github.com/barajs/bara-react/compare/v2.0.2...v2.0.3) (2019-04-23)


### Bug Fixes

* **deps:** update dependency bara to v2.3.2 ([c5e8141](https://github.com/barajs/bara-react/commit/c5e8141))

## [2.0.2](https://github.com/barajs/bara-react/compare/v2.0.1...v2.0.2) (2019-04-22)


### Bug Fixes

* **use-barn-state:** change initialValue to any ([db57973](https://github.com/barajs/bara-react/commit/db57973))

## [2.0.1](https://github.com/barajs/bara-react/compare/v2.0.0...v2.0.1) (2019-04-19)


### Bug Fixes

* **deps:** update dependency bara to v2.3.1 ([5baeeb0](https://github.com/barajs/bara-react/commit/5baeeb0))
* **license:** replace `fbemitter` with built-in bara's `useEmitter` ([a42e548](https://github.com/barajs/bara-react/commit/a42e548))

# [2.0.0](https://github.com/barajs/bara-react/compare/v1.3.2...v2.0.0) (2019-04-15)


### Bug Fixes

* **View:** add name prop to View for Bara ([097d0c1](https://github.com/barajs/bara-react/commit/097d0c1))


### Features

* **useReactApp:** make hook accept params as object instead of primitive value ([ecca7e5](https://github.com/barajs/bara-react/commit/ecca7e5))


### BREAKING CHANGES

* **useReactApp:** **useReactApp** change params to object

## [1.3.2](https://github.com/barajs/bara-react/compare/v1.3.1...v1.3.2) (2019-04-14)


### Bug Fixes

* **bara-react:** export BaraProvider for React app ([fa0b5c3](https://github.com/barajs/bara-react/commit/fa0b5c3))

## [1.3.1](https://github.com/barajs/bara-react/compare/v1.3.0...v1.3.1) (2019-04-12)


### Bug Fixes

* **bara-react:** switch to react-native for AppRegistry import ([56144fb](https://github.com/barajs/bara-react/commit/56144fb))

# [1.3.0](https://github.com/barajs/bara-react/compare/v1.2.0...v1.3.0) (2019-04-12)


### Bug Fixes

* **exports:** fix TouchableOpacity component stream event ([5b05344](https://github.com/barajs/bara-react/commit/5b05344))
* **src/index:** register useTextStream function ([cdcfc1f](https://github.com/barajs/bara-react/commit/cdcfc1f))


### Features

* **barn:** map Barn to React ([f87cb79](https://github.com/barajs/bara-react/commit/f87cb79))
* **context:** wired View to context ([11366bc](https://github.com/barajs/bara-react/commit/11366bc))
* **exports:** Add Text component ([60060a2](https://github.com/barajs/bara-react/commit/60060a2))
* **exports:** bridge <View> with bara ([b19749b](https://github.com/barajs/bara-react/commit/b19749b))
* **exports:** export TouchableOpacity component ([4e2ca64](https://github.com/barajs/bara-react/commit/4e2ca64))
* **exports:** export View component ([7fdcf82](https://github.com/barajs/bara-react/commit/7fdcf82))
* **exports:** register stream event for Text onPress function ([b46faad](https://github.com/barajs/bara-react/commit/b46faad))
* **Touchable:** add support React Native Touchable ([ef87420](https://github.com/barajs/bara-react/commit/ef87420)), closes [#1](https://github.com/barajs/bara-react/issues/1)

# [1.2.0](https://github.com/barajs/bara-react/compare/v1.1.0...v1.2.0) (2019-04-09)


### Features

* **exports:** add missing View component ([#3](https://github.com/barajs/bara-react/issues/3)) ([b4a4ecb](https://github.com/barajs/bara-react/commit/b4a4ecb)), closes [#1](https://github.com/barajs/bara-react/issues/1)

# [1.1.0](https://github.com/barajs/bara-react/compare/v1.0.0...v1.1.0) (2019-04-09)


### Features

* **exports:** Add Touchable & View components ([#2](https://github.com/barajs/bara-react/issues/2)) ([3fd429a](https://github.com/barajs/bara-react/commit/3fd429a)), closes [#1](https://github.com/barajs/bara-react/issues/1)

# 1.0.0 (2019-04-06)


### Features

* **bara-react:** able to registering Bara React application ([5e5bd2f](https://github.com/barajs/bara-react/commit/5e5bd2f))
* **Touchable:** able to emit from props via context ([f694e42](https://github.com/barajs/bara-react/commit/f694e42))
