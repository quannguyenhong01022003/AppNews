/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ScreenLogin from './src/ScreenLogin';

AppRegistry.registerComponent(appName, () => ScreenLogin);
