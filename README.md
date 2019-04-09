# bara-react

Build Bara app using React, extensible, scalable, and no breaking build.

This library belong to BaraJS Official Library, we build this for the next universal React app using the architect of reactive functional programming.

By using `bara-react`, you're no longer need to maintain a wired codebase anymore. Build your apps feature by feature. You can quickly implement new feature when your business grow up, or remove a feature when it's out dated without touching other area of the project.

## Installation

```
yarn add -E bara bara-react
```
 or using NPM

```
npm i --save bara bara-react
```


## Usage

In your main `index.js`:
```javascript

import {register} from 'bara'
import {useReactApp} from 'bara-react'
import App from './App'
import {useDisplayWelcomeMsgTrigger} from './app-trigger'

const myBaraReactApp = () => {
    useReactApp(App)
    useDisplayWelcomeMsgTrigger()
}

register(myBaraReactApp)
```


In your React App `App.jsx':`

```javascript
import React from 'react'
import {BaraProvider, Text, Touchable, View} from 'bara-react'

export default const App = () => {
    return (
        <BaraProvider>
            <View>
                <Touchable name="welcome-button">
                    <Text>Hello Bara App!</Text>
                </Touchable>
            </View>
        </BaraProvider>
    )
}
```
Create another file called `app-trigger.js`:

```javascript
import { useTouchablePress, nameOf } from 'bara-react'

export const useDisplayWelcomeMsgTrigger = () => {
    return useTouchablePress({nameOf: nameOf('welcome-button')}, () => {
        alert('Welcome Button has been clicked!')
    })
}
```

## Why I have to build my app this way?

- [ ] React is best of rendering
- [ ] Bara is best of reactive functional programming
- [ ] Easily create or remove a component without touching other business components.
- [ ] Easily plug and play with BaraJS ecosystem module

## License

MIT © [BaraJS](https://barajs.dev)

