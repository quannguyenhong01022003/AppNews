/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ScreenLogin from './src/ScreenLogin';
import ItemlistNews from './src/ItemlistNews';
import ListNews from './src/ListNews';

AppRegistry.registerComponent(appName, () => ListNews);
