import Reactotron, {storybook} from 'reactotron-react-native';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const yeOldeConsoleLog = console.log;

console.log = (...args) => {
  yeOldeConsoleLog(...args);
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: 'bagus_test',
  }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reduxPlugin())
  .use(storybook())
  .connect();
