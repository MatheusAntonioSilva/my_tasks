/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './src/app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
