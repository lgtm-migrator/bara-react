import { AppRegistry } from 'react-native-web';
// TODO trigger render function when the bara app has been initialized
const render = (name, AppComponent) => {
    AppRegistry.registerComponent(name, () => AppComponent);
};
const bridge = (name, App) => () => {
    render(name, App); // TODO manually call render function here
};
export const useReactApp = (name, App) => {
    bridge(name, App);
};
//# sourceMappingURL=index.js.map